import React, { createContext, Dispatch, useContext, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSegments } from "expo-router";
import { useRootNavigationState } from "expo-router";
import { router } from "expo-router";
import { auth } from "../firebaseConfig";

interface User {
  uid: string;
  displayName: string;
  photoURL: string;
  providerId: string;
  lastLoginAt: string;
  createdAt: string;
  email: string;
}

interface ContextInterface {
  user: User | null;
  signIn: Dispatch<React.SetStateAction<User>>;
  signOut: () => void;
}

const initialState = {
  uid: "",
  createdAt: "",
  displayName: "",
  lastLoginAt: "",
  photoURL: "",
  providerId: "",
  email: "",
};

const contextInitialState: ContextInterface = {
  user: initialState,
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext(contextInitialState);

export function useAuth(): ContextInterface {
  const context = useContext<ContextInterface>(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

function useProtectedRoles(user: User) {
  const segment = useSegments();
  const navigationState = useRootNavigationState();

  const [hasNavigated, setHasNavigated] = useState(false);

  React.useEffect(() => {
    if ( hasNavigated) return;
    const inAuthGroup = segment[0] === "[auth]";

    if (!user.uid && !inAuthGroup) {
      router.replace("/(auth)/signIn");
    } else if (user.uid && inAuthGroup) {
      router.replace("/(tabs)");
      setHasNavigated(true);
    }
  }, [user.uid, segment, navigationState, hasNavigated]);
}

export const AuthProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [user, setUser] = useState<User>(initialState);
  useProtectedRoles(user)

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,async (user) => {
      if(user){
        const dataCareAbout: User = {
          uid:user.providerData[0].displayName ?? "",
          createdAt:user.metadata.creationTime!,
          displayName:user.providerData[0].displayName ?? "",
          lastLoginAt:user.metadata.creationTime!,
          photoURL:user.providerData[0].photoURL ?? "",
          providerId:user.providerData[0].providerId,
          email:user.providerData[0].email ?? "",
        }
        console.log(user)
        setUser(dataCareAbout)
        router.replace("/(tabs)")
      }else {
        // setUser(initialState)
        console.log("User is not authenticated")
        router.replace("/(auth)/signIn")
      }
    })
    return () => unSubscribeAuth()
  },[])
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: setUser,
        signOut: () => {
          setUser(initialState);
          signOut(auth);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

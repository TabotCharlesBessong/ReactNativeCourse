import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const handleCreateAccount = () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Account created");
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleSignInAccount = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("signed in");
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

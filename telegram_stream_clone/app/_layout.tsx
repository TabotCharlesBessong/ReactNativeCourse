import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default RootLayout;

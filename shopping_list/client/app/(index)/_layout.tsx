import Button from "@/components/ui/button";
import { ListCreationProvider } from "@/context/ListCreationContext";
import ShoppingListsStore from "@/store/ShoppingListsStore";
import { Stack, useRouter } from "expo-router";
import { Provider as TinybaseProvider } from "tinybase/ui-react";

export default function HomeRouteLayout() {
  const router = useRouter();
  return (
    <TinybaseProvider>
      <ShoppingListsStore />
      <ListCreationProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "Shopping List",
            }}
          />
          <Stack.Screen
            name="profile"
            options={{
              presentation: "formSheet",
              sheetAllowedDetents: [0.75, 1],
              sheetGrabberVisible: true,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="list/new/index"
            options={{
              presentation: "formSheet",
              sheetAllowedDetents: [0.75, 1],
              sheetGrabberVisible: true,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="list/new/scan"
            options={{
              presentation: "fullScreenModal",
              headerLargeTitle: false,
              headerTitle: "Scan QR code",
              headerLeft: () => (
                <Button variant="ghost" onPress={() => router.back()}>
                  Cancel
                </Button>
              ),
            }}
          />
          <Stack.Screen
            name="emoji-picker"
            options={{
              presentation: "formSheet",
              headerLargeTitle: false,
              headerTitle: "Choose an emoji",
              sheetAllowedDetents: [0.5, 0.75, 1],
              sheetGrabberVisible: true,
            }}
          />
          <Stack.Screen
            name="color-picker"
            options={{
              presentation: "formSheet",
              headerLargeTitle: false,
              headerTitle: "Choose a color",
              sheetAllowedDetents: [0.5, 0.75, 1],
              sheetGrabberVisible: true,
            }}
          />
        </Stack>
      </ListCreationProvider>
    </TinybaseProvider>
  );
}

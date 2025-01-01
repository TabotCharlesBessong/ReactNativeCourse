import { Stack } from "expo-router";
// import React = require("react");
// import React = require("react");
import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth-provider";
import QueryProvider from "../providers/query-provider";

export default function RootLayout() {
  return (
    <ToastProvider>
      <AuthProvider>
        <QueryProvider>
          <Stack>
            <Stack.Screen
              name="(shop)"
              options={{ headerShown: false, title: "Shop" }}
            />
            <Stack.Screen
              name="categories"
              options={{ headerShown: false, title: "Category" }}
            />
            <Stack.Screen
              name="product"
              options={{ headerShown: false, title: "Product" }}
            />
            <Stack.Screen
              name="cart"
              options={{
                headerShown: true,
                title: "Shopping Cart",
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="auth"
              options={{ headerShown: false, title: "Auth" }}
            />
          </Stack>
        </QueryProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

import { Stack } from "expo-router";
import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth-provider";
import QueryProvider from "../providers/query-provider";
import { StripeProvider } from "@stripe/stripe-react-native"

export default function RootLayout() {
  return (
    <ToastProvider>
      <AuthProvider>
        <QueryProvider>
          <StripeProvider
            publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
          >
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
          </StripeProvider>
        </QueryProvider>
      </AuthProvider>
    </ToastProvider>
  );
} 

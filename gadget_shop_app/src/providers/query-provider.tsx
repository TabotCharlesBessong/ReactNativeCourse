import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { PropsWithChildren } from "react"
// import React = require("react")
import React from "react"

const queryClient = new QueryClient()

export default function QueryProvider({children}:PropsWithChildren){
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
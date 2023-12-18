
import { View, Text } from 'react-native'
import React, { FC, PropsWithChildren, createContext, useState } from 'react'
import AppwriteService from './service'

type AppContextType = {
  appwrite:AppwriteService
  isLoggedIn:boolean
  setIsLoggedIn: (isLoggedIn:boolean) => void
}

export const AppwriteContext = createContext<AppContextType>({
  appwrite: new AppwriteService(),
  isLoggedIn:false,
  setIsLoggedIn:() => {}
})

export const AppwriteProvider:FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const defaultValue = {
    appwrite:new AppwriteService(),
    isLoggedIn,
    setIsLoggedIn
  }
  return (
    <AppwriteContext.Provider value={defaultValue} >
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteContext
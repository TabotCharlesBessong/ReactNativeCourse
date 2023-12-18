import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppwriteContext from '../appwrite/AppwriteContext'
import Snackbar from 'react-native-snackbar'
import { FAB } from '@rneui/themed'
import { Image } from 'react-native'

type UserObject = {
  name: string
  email: string
}


const Home = () => {
  const [userData, setUserData] = useState<UserObject>()
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext)
  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false)
      Snackbar.show({
        text: 'Logout successfully',
        duration: Snackbar.LENGTH_SHORT
      })
    })
  }

  useEffect(() => {
    appwrite.getCurrentUser().then(response => {
      if (response) {
        const user: UserObject = {
          name: response.name,
          email: response.email,
        }
        setUserData(user)
      }
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={{
              uri: 'https://appwrite.io/images-ee/blog/og-private-beta.png',
              width: 400,
              height: 300,
              cache: 'default',
            }}
            resizeMode="contain"
          />
          <Text style={styles.message}>
            Build Fast. Scale Big. All in One Place.
          </Text>
          {userData && (
            <View style={styles.userContainer}>
              <Text style={styles.userDetails}>Name: {userData.name}</Text>
              <Text style={styles.userDetails}>Email: {userData.email}</Text>
            </View>
          )}
        </View>
        <FAB
          placement="right"
          color="#f02e65"
          size="large"
          title="Logout"
          icon={{name: 'logout', color: '#FFFFFF'}}
          onPress={handleLogout}
        />
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
  welcomeContainer: {
    padding: 12,

    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userContainer: {
    marginTop: 24,
  },
  userDetails: {
    fontSize: 20,
    color: '#FFFFFF',
  },
})
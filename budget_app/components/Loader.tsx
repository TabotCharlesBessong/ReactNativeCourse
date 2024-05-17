import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
      <Text>Loading....</Text>
    </View>
  );
}

export default Loader
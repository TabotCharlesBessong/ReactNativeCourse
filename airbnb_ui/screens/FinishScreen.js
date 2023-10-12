import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const FinishScreen = () => {
    return (
      <View style={{ marginTop: 40,backgroundColor:"white",flex:1,alignItems: "center",justifyContent: "center"}}>
        <Text style={{ fontSize: 30, margin: 10 }}>
          Hooray your Stay has been Booked!!
        </Text>

        <Image
        style={{width: 120, height:120}}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUTstBwKAVhsWh9pqEFP8uN-0hKDJe-nDIQ&usqp=CAU",
          }}
        />
      </View>
    );
}

export default FinishScreen

const styles = StyleSheet.create({})

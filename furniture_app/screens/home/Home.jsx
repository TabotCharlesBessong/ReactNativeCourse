
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './home.styles'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import {Welcome} from '../../component'

const Home = () => {
  return (
    <SafeAreaView style={{marginTop:32}} >
      <View style={styles.appBarWrapper} >
        <View style={styles.appBar} >
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location} >Buea Cameroon</Text>
          <View style={{alignItems:'flex-end'}} >
            <View style={styles.cardCount} >
              <Text style={{color:'white',fontFamily:'regular',fontWeight:600,fontSize:10}} >0</Text>
            </View>
            <TouchableOpacity>

            <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home


import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './home.styles'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import {Carousel, Heading, ProductRow, Welcome} from '../../component'

const Home = () => {
  return (
    <ScrollView>
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
          <Carousel/>
          <Heading/>
          <ProductRow/>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis maxime distinctio repellendus architecto earum iste ad, iusto dicta, quod eius beatae asperiores accusantium vero veritatis ea laboriosam labore at eaque placeat consectetur nisi? Unde doloremque eius iste excepturi deleniti, sint magni repudiandae alias rem necessitatibus itaque officiis repellat amet porro ratione soluta! Sunt dolorem, mollitia reiciendis eos qui, fuga deleniti assumenda tempore vitae aut accusantium corporis modi est ipsam.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Home

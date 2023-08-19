
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './heading.styles'
import { Ionicons } from '@expo/vector-icons'

const Heading = () => {
  return (
    <View style={styles.headingContainer} >
      <View style={styles.header} >
        <Text style={styles.headerTitle} >new arrivales</Text>
        <TouchableOpacity>
          <Ionicons name='ios-grid' size={24} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heading

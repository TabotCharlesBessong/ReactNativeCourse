
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants/theme'
import styles from './search.style'

const Search = () => {
  const [searchValue, setsearchValue] = useState('')
  return (
    <SafeAreaView style={{marginTop:32}} >
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="what are you looking for"
          />
        </View>
        <View  >
          <TouchableOpacity style={styles.searchBtn} >
            <Feather name="search" size={SIZES.xLarge} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search

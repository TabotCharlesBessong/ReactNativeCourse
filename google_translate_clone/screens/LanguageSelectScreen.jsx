
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constant/colors';
import supportedLanguages from '../utils/supportedLanguages'
import { LanguageItem } from '../components';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={props.color || colors.primary}
    />
  );
};

const LanguageSelectScreen = ({navigation,route}) => {

  const params = route.params || {};
  const { title, selected } = params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            iconName="close"
            color={colors.textColor}
            onPress={() => navigation.goBack()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const onLanguageSelect = useCallback(itemKey => {
    const dataKey = params.moode === 'to' ? 'languageTo' : 'languageFrom'
    navigation.navigate('Home',{[dataKey] : itemKey})
  },[params,navigation])

  return (
    <View style={styles.container} >
      <FlatList 
        data={Object.keys(supportedLanguages)}
        renderItem={(item) => {
          const languageKey = item.item
          const languageString = supportedLanguages[languageKey]
          return (
            <LanguageItem onPress={() => onLanguageSelect(languageKey)} text={languageString} selected={languageKey === selected} />
          )
        }}
      />
    </View>
  )
}

export default LanguageSelectScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
})
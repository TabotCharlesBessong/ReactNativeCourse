
import React from 'react'
import styled from 'styled-components/native'
import {Platform} from "react-native"
import WebView from 'react-native-webview'
import {Text} from '../typography/Text'

const CompactImage = styled.Image`
  border-radius:10px;
  width:120px;
  height:100px
`;

const Item = styled.View`
  padding:10px;
  max-width:120px;
  align-items:center
`;

const CompactWebView = styled(WebView)`
  border-radius:10px;
  width:120px;
  height:100px
`;

const isAndroid = Platform.OS === 'android'

const CompactRestaurantInfo = ({restaurant,isMap}) => {

  const Image = isAndroid && isMap ? CompactWebView : CompactImage
  return (
    <Item>
      <Image
        source={{uri:restaurant.photos[0]}}
      />
      <Text center variant="caption" >
        {restaurant.name}
      </Text>
    </Item>
  )
}

export default CompactRestaurantInfo

import React from 'react'
import {View, Text , StyleSheet } from 'react-native'
import images from '../../../constant/images'
import {Card} from 'react-native-paper'
import { Address, Info, RestaurantCard } from './Styles'
import styled from 'styled-components/native'
// import {SvgXml} from 'react-native-svg'
import star from '../../../../assets/star'

const Title = styled(Text)`
  padding:16px;,
  color:red;
  textAlign:center;
  textTransform:capitalize;
  font-family:${(props) => props.theme.fonts.body };
  font-size:${(props) => props.theme.fontSizes.body }

`;

const RestaurantInfo = ({restaurant ={} }) => {
  const {
    name= ' my restaurant',
    icon,
    photos = [images.home , images.adaptiveIcon] ,
    address='molyko, buea',
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = false
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))
  // console.log(ratingArray)
  return (
		<View>
			<RestaurantCard elevation={5} style={StyleSheet.card}>
				<Card.Cover
					key={name}
					style={styles.cover}
					source={{ uri: photos[0] }}
				/>
				<Info>
					<Title>{name}</Title>
					{/* {ratingArray.map(() => (
						<SvgXml xml={star} width={20} height={20} />
					))} */}
					<Address> {address} </Address>
				</Info>
			</RestaurantCard>
		</View>
	);
}

const styles = StyleSheet.create({
  cover:{
    padding:20,
    backgroundColor:'#fff'
  },
  title:{
    textAlign:'center',
    padding:4,
    textTransform:'capitalize'
  }
})

export default RestaurantInfo

import React from 'react'
import {View, Text , StyleSheet } from 'react-native'
import images from '../../../constant/images'
import {Card} from 'react-native-paper'
import { Address, Info, Rating, RestaurantCard, Section, SectionEnd } from './Styles'
import styled from 'styled-components/native'
import {SvgXml , SvgUri} from 'react-native-svg'
import star from '../../../../assets/star'
// import open from '../../../../assets/open'

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
					<Section>
						<Rating>
							{/* {ratingArray.map(() => (
						<SvgXml xml={star} width={20} height={20} />
					  ))} */}
							{/* <SvgUri
								width="100%"
								height="100%"
								svgXmlData="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
							/> */}
						</Rating>
						{/* <SectionEnd>
              { isOpenNow && <SvgXml xml={open} width={20} height={20} /> }
            </SectionEnd> */}
					</Section>

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
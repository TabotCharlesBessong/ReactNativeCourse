import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../utils/Color';
import { paddingSizes } from '../../utils/Sizes';
import Countdown from '../../component/Countdown';

const Timer = ({focusSubject}) => {
  return (
		<View style={styles.container}>
			<View style={styles.countdown} >
				<Countdown />
			</View>
			<View style={{ paddingTop: paddingSizes.xxl }}>
				<Text style={styles.title}>Focusing on :</Text>
				<Text style={styles.task}>{focusSubject} </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  container :{
    flex:1
  },
  title:{
    color:colors.white,
    textAlign:'center'
  },
  task:{
    color:colors.white,
    fontWeight:'bold',
    textAlign:'center'
  },
  countdown:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default Timer
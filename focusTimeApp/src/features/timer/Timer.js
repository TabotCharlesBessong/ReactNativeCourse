import { View, Text , StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/Color';
import { paddingSizes } from '../../utils/Sizes';
import Countdown from '../../component/Countdown';
import RoundedButton from '../../component/RoundedButton';
import { ProgressBar } from 'react-native-paper';

const Timer = ({focusSubject}) => {

  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)

  const onProgress = (progress) =>{
    setProgress(progress)
  }
  return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown isPaused={!isStarted} onProgress={onProgress} />
			</View>
			<View style={{ paddingTop: paddingSizes.xxl }}>
				<Text style={styles.title}>Focusing on :</Text>
				<Text style={styles.task}>{focusSubject} </Text>
			</View>
			<View style={{ paddingTop: paddingSizes.sm }}>
				<ProgressBar
					color="#5e84e2"
					style={{ height: 10 }}
					progress={progress}
				/>
			</View>
			<View style={styles.buttonWrapper}>
				{isStarted ? (
					<RoundedButton
						title="pause"
						// size={50}
						onPress={() => setIsStarted(false)}
					/>
				) : (
					<RoundedButton
						title="start"
						// size={50}
						onPress={() => setIsStarted(true)}
					/>
				)}
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
  },
  buttonWrapper:{
    flex:0.3 , 
    padding:50,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Timer
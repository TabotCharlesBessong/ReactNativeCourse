import { View, Text , StyleSheet } from 'react-native'
import React, {useState , useEffect} from 'react'
import { fontSizes, paddingSizes } from '../utils/Sizes'
import { colors } from '../utils/Color'

const minutesToMillis = (min) => min * 60 * 1000

const formatTime = (time) => time < 10 ? '0' + time : time

const Countdown = ({
  minutes = 20,
  isPaused, 
}) => {

  const interval = React.useRef(null)
   
  const countdown = () =>{
    setMillis((time)=>{
      if(time === 0){
        // do stuff
        return time 
      }
      const timeLeft = time - 1000 
      // report the progress

      return timeLeft
    })
  }

  useEffect(()=>{
    interval.current = setInterval(countdown,1000)

    return () => clearInterval(interval.current)
  },[])

  const [millis, setMillis] = useState(minutesToMillis(minutes))
  const minute = Math.floor(millis / 1000 / 60) % 60 
  const second = Math.floor(millis / 1000) % 60
  return (
    <View>
      <Text style={styles.text} > { formatTime(minute)}:{formatTime(second)} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:fontSizes.xxxl,
    fontWeight:'bold',
    padding:paddingSizes.lg,
    backgroundColor:colors.lightBlue,
    color:colors.white
  }
})

export default Countdown
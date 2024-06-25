import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Channel, ChannelList } from 'stream-chat-expo'

const index = () => {
  const [channel, setChannel] = useState()
  if(channel){
    return (
      <Channel channel={channel} ></Channel>
    )
  }
  return (
    <ChannelList onSelect={(channel) => setChannel(channel)} />
  )
}

export default index

const styles = StyleSheet.create({}) 

// Button and text in a component 

import React from "react";
import { View, Text, Button } from "react-native";

const SimpleComponent = () => {
  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput />
      <Button title="Submit" onPress={() => console.log("Button pressed")} />
    </View>
  );
};

export default SimpleComponent;
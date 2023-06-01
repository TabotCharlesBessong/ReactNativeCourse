
// Counter 

import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={incrementCount} />
      <Button title="-" onPress={decrementCount} />
      <Button title="=" onPress={resetCount} />
    </View>
  );
};

export default Counter;
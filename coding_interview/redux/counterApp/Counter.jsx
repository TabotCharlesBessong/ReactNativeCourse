import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{count}</Text>
      <Button title="+" onPress={handleIncrement} />
      <Button title="-" onPress={handleDecrement} />
      <Button title="=" onPress={handleReset} />
    </View>
  );
}

export default Counter;


import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function ItemList() {
  const [title, setTitle] = useState("");
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", payload: title });
    setTitle("");
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ flex: 1 }}>{item.title}</Text>
      <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Enter item title"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginBottom: 16,
        }}
      />
      <Button title="Add" onPress={handleAddItem} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginTop: 16 }}
      />
    </View>
  );
}

export default ItemList;
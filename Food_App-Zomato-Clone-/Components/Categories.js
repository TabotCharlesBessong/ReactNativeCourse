import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Categories = () => {
  const items = [
    {
      id: "1",
      name: "fastest delivery",
    },
    {
      id: "2",
      name: "rating 4.0+",
    },
    {
      id: "3",
      name: "offers",
    },
    {
      id: "4",
      name: "cuisines",
    },
    {
      id: "5",
      name: "MAX Safety",
    },
    {
      id: "6",
      name: "Pro",
    },
  ];
  return (
    <View style={{marginTop:5}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        /* Kullanacağım verinin items dizisi olduğunu belirtmem gerekiyor ki renderItem ile kullanma durumum olsun */
        data={items}
        renderItem={({ item }) => (
            /* margin aralara boşluk koyma(birbirinden ayırma) durumuna yaradı */
          <Pressable style={{backgroundColor:"#E25822",padding:5,margin:5,borderRadius:20}}>
            <Text style={{color:"white"}}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});

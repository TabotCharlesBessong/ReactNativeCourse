import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
// import React = require("react");
import React from "react";
import { PRODUCTS } from "../../../assets/products";
import ProductListItem from "../../component/product-list-item";
import ListHeader from "../../component/list-header";
import { getProductsAndCategories } from "../../api/api";

const index = () => {
  const {data,isLoading,error} = getProductsAndCategories()
  if (isLoading) return <ActivityIndicator />
  if (error) return <Text>Error: {error.message}</Text>
  // console.log(data)
  return (
    <View>
      <FlatList
        data={data?.products}
        renderItem={({ item }) => (
          <ProductListItem product={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader categories={data?.categories} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        style={{paddingHorizontal:10,paddingVertical:5}}
      />
    </View>
      // <Auth />
  );
};
 
export default index;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom:20
  },
  columnWrapper: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});

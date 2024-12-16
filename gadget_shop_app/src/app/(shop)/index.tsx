import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PRODUCTS } from "../../../assets/products";
import ProductListItem from "../../component/product-list-item";
import ListHeader from "../../component/list-header";
import Auth from "../auth";

const index = () => {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
          <ProductListItem product={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        style={{paddingHorizontal:10,paddingVertical:5}}
      />
    </View>
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

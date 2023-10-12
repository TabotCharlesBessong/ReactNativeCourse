import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

const Explore = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        const exploreData = async () => {
             await fetch("https://links.papareact.com/pyp")
               .then((response) => response.json())
               .then((data) => setData(data));
        };
       exploreData();
    },[])
    return (
      <View style={{ padding: 10 }}>
        <Text style={{fontSize:18,fontWeight: 'bold'}}>explore More</Text>
        <FlatList
          data={data}
          // keyExtractor={(item) =>item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{ flexDirection: "row", align: "center", margin: 10,marginLeft:15, }}
              
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: item.img }}
              />
              <View
                style={{
                  paddingLeft: 10,
                  backgroundColor: "#7CB9E8",
                  width: 114,
                  paddingTop: 4,
                  borderBottomRightRadius: 6,
                  borderTopRightRadius: 6,
                }}
              >
                <Text style={{ color: "white" }}>{item.location}</Text>
                <Text style={{ color: "#4C516D" }}>{item.distance}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
}

export default Explore

const styles = StyleSheet.create({})

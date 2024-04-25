import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import library from "../../assets/data/library.json";
import TrackListItem from "./TrackListItem";
import {utilsStyles} from "../../styles"

export type TrackListProps = Partial<FlatListProps<unknown>> & {
  tracks:any[]
}

const ItemDivider = () => (
  <View style={{...utilsStyles,marginVertical:9,marginLeft:16}} />
)

const TracksList = ({tracks,...flatListProps}:TrackListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{paddingTop:10,paddingBottom:120}}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            // ...track,
            image: track.artwork,
            title: track.title,
            artist: track.artist,
          }}
        />
      )}
      {...flatListProps}
    />
  );
};

export default TracksList;

const styles = StyleSheet.create({});

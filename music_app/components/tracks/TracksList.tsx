import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import library from "../../assets/data/library.json";
import TrackListItem from "./TrackListItem";
import {utilsStyles} from "../../styles"
import { Track } from "react-native-track-player";

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks:Track[]
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
          track={track}
        />
      )}
      {...flatListProps}
    />
  );
};

export default TracksList;

const styles = StyleSheet.create({});

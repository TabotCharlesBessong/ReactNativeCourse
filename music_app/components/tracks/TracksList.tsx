import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import library from "../../assets/data/library.json";
import TrackListItem from "./TrackListItem";

export type TrackListProps = Partial<FlatListProps<unknown>>;


const TracksList = ({...flatListProps}:TrackListProps) => {
  return (
    <FlatList
      data={library}
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

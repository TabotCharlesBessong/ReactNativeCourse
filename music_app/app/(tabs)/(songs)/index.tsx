import { TracksList } from "@/components";
import { screenPadding } from "@/constants/tokens";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles } from "@/styles";
import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import library from "../../../assets/data/library.json"
import { trackTitleFilter } from "@/helpers/filter";

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions:{
      placeholder:"Find in songs"
    }
  })

  const filteredSongs = useMemo(() => {
    if(!search) return library
    return library.filter(trackTitleFilter(search))
  },[search])
  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ marginTop: 72, paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList tracks={filteredSongs} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;


import React,{useContext , useEffect, useState} from "react"
import { SearchContainer } from "../features/restaurants/screens/Styles";
import { Searchbar } from "react-native-paper";
import {LocationContext} from '../services/location/locationContext'

export const Search = () => {
	const {keyword,search} = useContext(LocationContext)
	const [searchKeyword, setSearchKeyword] = useState('')

	useEffect(()=>{
    search(searchKeyword)
	},[])

  const locationContext = useContext(LocationContext)
  return (
		<SearchContainer>
			<Searchbar
				placeholder="Search for a location"
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword);
				}}
				onChangeText={(text) => {
					setSearchKeyword(text);
				}}
			/>
		</SearchContainer>
	);
}
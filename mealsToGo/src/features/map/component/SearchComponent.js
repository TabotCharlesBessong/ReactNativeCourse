import React, { useContext, useEffect, useState } from "react";
// import {SearchContainer} from '../../../features/restaurants/screens/Styles'
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/locationContext";

export const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
	position:absolute;
	z-index:999;
	top:40px;
	width:100%
`;

const SearchComponent = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	useEffect(() => {
		search(searchKeyword);
	}, [keyword]);

	const locationContext = useContext(LocationContext);
	return (
		<SearchContainer>
			<Searchbar
				placeholder="Search for a location"
				icon="map"
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
};

export default SearchComponent

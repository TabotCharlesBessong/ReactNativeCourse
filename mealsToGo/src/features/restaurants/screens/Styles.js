import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-web";


export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
`;

export const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
	color: ${(props) => props.theme.colors.brand.primary};
`;
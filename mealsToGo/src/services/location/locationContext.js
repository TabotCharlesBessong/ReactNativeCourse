import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./locationServices";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState("chicago");
	const [location, setLocation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword = "Antwerp") => {
		console.log(searchKeyword);
		setIsLoading(true);
		setKeyword(searchKeyword);
	};

	useEffect(() => {
		if(!keyword.length){
			return
		}
		locationRequest(keyword.toLowerCase())
			.then(locationTransform)
			.then((result) => {
				setIsLoading(false);
				setLocation(result);
				console.log(result);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err);
			});
		// onSearch(keyword);
	}, [keyword]);

	return (
		<LocationContext.Provider
			value={{
				isLoading,
				error,
				location,
				search: onSearch,
				keyword,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};

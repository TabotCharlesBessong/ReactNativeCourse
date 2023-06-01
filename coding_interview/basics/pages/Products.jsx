
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View>
      {data ? (
        <View>
          <Text>Title: {data.title}</Text>
          <Text>Body: {data.body}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Products;

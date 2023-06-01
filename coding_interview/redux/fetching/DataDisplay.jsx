
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store';

function DataDisplay() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {data.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}

export default DataDisplay;
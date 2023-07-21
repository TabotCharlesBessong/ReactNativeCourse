
import React, { useState, useEffect } from 'react';
import { TextInput, View, Text } from 'react-native';
import { COLORS, SIZES } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    const savePhoneNumberToStorage = async () => {
      try {
        await AsyncStorage.setItem('phoneNumber', phoneNumber);
      } catch (e) {
        console.log('Error saving phone number to local storage:', e);
      }
    };

    savePhoneNumberToStorage();
  }, [phoneNumber]);

  return (
    <View>
      <TextInput
        style={{
          flex: 1,
          marginVertical: 10,
          borderColor: '#111',
          backgroundColor: COLORS.secondaryWhite,
          borderRadius: SIZES.padding,
          paddingLeft: SIZES.padding,
          height: 48,
          fontSize: 16,
          color: '#111',
        }}
        placeholder="Enter your phone number"
        placeholderTextColor="#111"
        selectionColor="#111"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      <Text>{phoneNumber}</Text>
      <ChildComponent phoneNumber={phoneNumber} />
    </View>
  );
};

const ChildComponent = ({ phoneNumber }) => {
  return <Text>{phoneNumber}</Text>;
};

export default MyComponent;


import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyOtherScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const getPhoneNumberFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem('phoneNumber');
        if (value !== null) {
          setPhoneNumber(value);
        }
      } catch (e) {
        console.log('Error getting phone number from local storage:', e);
      }
    };

    getPhoneNumberFromStorage();
  }, []);

  return <Text>{phoneNumber}</Text>;
};

export default MyOtherScreen;
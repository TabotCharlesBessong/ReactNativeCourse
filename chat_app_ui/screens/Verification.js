import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import OTPTextInput from 'react-native-otp-textinput'
import Button from '../components/Button'
import PageTitle from '../components/PageTitle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getPhoneNumberFromStorage } from '../utils/getPhone'

const Verification = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const otpInput = useRef(null)

    const clearText = () => {
        otpInput.current.clear()
    }

    const setText = () => {
        otpInput.current.setValue('1234')
    }

    useEffect(() => {
        getPhoneNumberFromStorage()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <PageTitle onPress={() => navigation.navigate('PhoneNumber')} />
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        marginHorizontal: 22,
                    }}
                >
                    <Text
                        style={{ ...FONTS.h2, marginTop: 48, marginBottom: 22 }}
                    >
                        Enter Verification Code
                    </Text>
                    <Text style={{ ...FONTS.body3, textAlign: 'center' }}>
                        We have sent you an SMS with the code
                    </Text>
                    <Text style={{ ...FONTS.body3, textAlign: 'center' }}>
                        {' '}
                        to {phoneNumber}
                    </Text>
                    <View style={{ marginVertical: 60 }}>
                        <OTPTextInput
                            textInputStyle={{
                                backgroundColor: COLORS.secondaryWhite,
                                borderColor: COLORS.secondaryWhite,
                                borderWidth: 1,
                                borderRadius: 60,
                                borderBottomWidth: 1,
                            }}
                            inputCount={4}
                            tintColor={COLORS.primary}
                        />
                    </View>
                    <Button
                        title="Resend code"
                        disabled
                        onPress={() => navigation.navigate('ProfileAccount')}
                        style={{
                            width: '100%',
                            paddingVertical: 12,
                            marginBottom: 48,
                        }}
                    />
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Verification

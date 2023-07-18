import { View, Text, Image } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, COLORS, SIZES, FONTS } from '../constants'
import Button from '../components/Button'

export default function Walkthrough({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        marginHorizontal: 22,
                    }}
                >
                    <Image
                        source={images.illustration}
                        resizeMode="contain"
                        style={{
                            width: SIZES.width * 0.7,
                            height: SIZES.width * 0.7,
                            marginVertical: 48,
                        }}
                    />

                    <Text
                        style={{
                            ...(SIZES.width <= 360
                                ? { ...FONTS.h2 }
                                : { ...FONTS.h1 }),
                            textAlign: 'center',
                            marginHorizontal: SIZES.padding * 0.8,
                        }}
                    >
                        Connect easily with your family and friends over
                        countries
                    </Text>

                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text
                            style={{
                                ...FONTS.body3,
                                marginVertical: 12,
                            }}
                        >
                            Terms and Privacy
                        </Text>

                        <Button
                            title="Start Messaging"
                            onPress={() => navigation.navigate('PhoneNumber')}
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginBottom: 48,
                            }}
                        />
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

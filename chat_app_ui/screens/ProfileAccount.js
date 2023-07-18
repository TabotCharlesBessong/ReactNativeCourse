import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS } from '../constants'
import { AntDesign } from '@expo/vector-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import PageTitle from '../components/PageTitle'

const ProfileAccount = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <PageTitle
                    title="Your Profile"
                    onPress={() => navigation.navigate('Verification')}
                />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: COLORS.secondaryWhite,
                            borderRadius: 50,
                            marginVertical: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AntDesign name="user" size={64} color={COLORS.black} />
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                            }}
                        >
                            <AntDesign
                                name="pluscircle"
                                size={24}
                                color={COLORS.black}
                            />
                        </View>
                    </View>

                    <View style={{ width: '100%', paddingHorizontal: 22 }}>
                        <Input
                            id="firstName"
                            placeholder="First Name (Required) "
                        />
                        <Input
                            id="lastName"
                            placeholder="Last Name (Optional) "
                        />

                        <Button
                            title="Save"
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginBottom: 48,
                            }}
                            onPress={() =>
                                navigation.navigate('BottomTabNavigation')
                            }
                        />
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default ProfileAccount

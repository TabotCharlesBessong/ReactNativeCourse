import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import {
    AntDesign,
    MaterialIcons,
    MaterialCommunityIcons,
    Ionicons,
    Entypo,
} from '@expo/vector-icons'

const More = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginHorizontal: 22,
                        marginVertical: 22,
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>More</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 22,
                    }}
                >
                    <View
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 30,
                            backgroundColor: COLORS.secondaryWhite,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AntDesign name="user" size={24} color={COLORS.black} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginHorizontal: 22,
                        }}
                    >
                        <Text style={{ ...FONTS.h4, marginVertical: 6 }}>
                            Almayra Zamzamy
                        </Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
                            {' '}
                            + 62 - 1300 - 0000- 0000
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('pressed')
                        }}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 32,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign
                                name="user"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Account
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="chatbubble-outline"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Chats
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Entypo
                                name="light-down"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Appearance
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                Notifications
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="shield-lock-open-outline"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                Privacy
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign
                                name="folder1"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                Data usage
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="help-circle-outline"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                Help
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                Invite Your Friends
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default More

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { contacts } from '../constants/data'
import { handleSearch } from '../utils/search'

const Contacts = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(contacts)

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            onPress={() =>
                navigation.navigate('PersonalChat', {
                    userName: item.userName,
                })
            }
            style={[
                {
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 22,
                    borderBottomColor: COLORS.secondaryWhite,
                    borderBottomWidth: 1,
                },
                index % 2 !== 0
                    ? {
                          backgroundColor: COLORS.tertiaryWhite,
                      }
                    : null,
            ]}
        >
            <View
                style={{
                    paddingVertical: 15,
                    marginRight: 22,
                }}
            >
                {item.isOnline && (
                    <View
                        style={{
                            height: 14,
                            width: 14,
                            borderRadius: 7,
                            backgroundColor: COLORS.green,
                            borderColor: COLORS.white,
                            borderWidth: 2,
                            position: 'absolute',
                            top: 14,
                            right: 2,
                            zIndex: 1000,
                        }}
                    ></View>
                )}

                <Image
                    source={item.userImg}
                    resizeMode="contain"
                    style={{
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                    {item.userName}
                </Text>
                <Text style={{ fontSize: 14, color: COLORS.secondaryGray }}>
                    {item.lastSeen}
                </Text>
            </View>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: 22,
                            marginTop: 22,
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>Contacts</Text>
                        <TouchableOpacity
                            onPress={() => console.log('Add contacts')}
                        >
                            <AntDesign
                                name="plus"
                                size={20}
                                color={COLORS.secondaryBlack}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.secondaryWhite,
                            height: 48,
                            marginVertical: 22,
                            paddingHorizontal: 12,
                            borderRadius: 20,
                        }}
                    >
                        <Ionicons
                            name="ios-search-outline"
                            size={24}
                            color={COLORS.black}
                        />

                        <TextInput
                            style={{
                                width: '100%',
                                height: '100%',
                                marginHorizontal: 12,
                            }}
                            value={search}
                            onChangeText={handleSearch}
                            placeholder="Search contact..."
                        />
                    </View>

                    <View
                        style={{
                            paddingBottom: 100,
                        }}
                    >
                        <FlatList
                            data={filteredUsers}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Contacts


export const getPhoneNumberFromStorage = async () => {
    try {
        const value = await AsyncStorage.getItem('phoneNumber')
        if (value !== null) {
            setPhoneNumber(value)
        }
    } catch (e) {
        console.log('Error getting phone number from local storage:', e)
    }
}
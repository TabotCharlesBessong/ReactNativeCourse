import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const Button = (props) => {
    const enabledBgColor = props.color || COLORS.primary
    const disabledBgColor = COLORS.secondaryWhite
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                ...styles.btn,
                ...{ backgroundColor: bgColor },
                ...props.style,
            }}
        >
            <Text
                style={{
                    ...FONTS.body3,
                    color: props.disabled ? COLORS.primary : COLORS.white,
                }}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding3,
        borderColor: COLORS.primary,
        borderRadius: SIZES.padding,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Button

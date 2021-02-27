import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native-web'
import * as COLORS from '../constants/COLORS'

interface IButtonBlack {
    title: string,
    action: Function
}
export const ButtonBlack = ({ title, action }: IButtonBlack) => {
    return (
        <TouchableOpacity style={style.container} onPress={action}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        height: '2.2rem',
        width: '11.6rem',
        backgroundColor: COLORS.maxWhite,
        borderColor: COLORS.maxBlack,
        borderWidth: 2,
        textAlign: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

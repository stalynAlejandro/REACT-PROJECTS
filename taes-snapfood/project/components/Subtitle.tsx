import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../constants/Colors'


interface ISubtitle {
    title: string
}
const Subtitle = ({ title }: ISubtitle) => {
    return (
        <Text style={styles.title}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        top: Dimensions.get('window').height / 4.25,
        width: '90%',
        fontFamily: 'Roboto_400Regular',
        fontStyle: 'normal',
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: COLORS.dark_gray
    },
})

export { Subtitle }
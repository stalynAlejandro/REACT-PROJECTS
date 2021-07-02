import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'

interface ITextReset {
    title: string
}
const TextReset = ({ title }: ITextReset) => {
    return (
        <Text style={styles.title}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        top: Dimensions.get('window').height / 6,
        fontFamily: 'Roboto_700Bold',
        fontSize: 30,
        display: 'flex',
        textAlign: 'center',
    },
})

export { TextReset }
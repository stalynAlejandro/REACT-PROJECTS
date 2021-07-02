import React from 'react'
import { Text, StyleSheet } from 'react-native'

interface ITitleMain {
    title: string
}

const TitleMain = ({ title }: ITitleMain) => {
    return (
        <Text style={styles.title}> {title} </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Rancho_400Regular',
        fontSize: 60
    }
})

export { TitleMain }
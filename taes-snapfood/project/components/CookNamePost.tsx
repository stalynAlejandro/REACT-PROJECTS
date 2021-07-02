import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'

interface ICookNamePost {
    title: string
}
const CookNamePost = ({ title }: ICookNamePost) => {
    return (
        <Text style={styles.title}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        marginTop:-90,
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        display: 'flex',
        textAlign: 'center',
        marginLeft: 60,
    },
})

export {CookNamePost}
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../constants/Colors'

interface IButtonMain {
    title: string,
    action: Function
}

const ButtonMain = ({ title, action }: IButtonMain) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => action()}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '90%',
        height: 60,
        backgroundColor: COLORS.orange,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: COLORS.white,
    }
})

export { ButtonMain }
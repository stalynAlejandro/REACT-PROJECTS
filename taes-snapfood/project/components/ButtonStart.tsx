import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../constants/Colors'

interface IButtonStart{
}

const ButtonStart = ({}: IButtonStart) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity>
                <Text style={styles.buttonText}>Comenzar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height:36,
        width:'45%',
        backgroundColor: COLORS.green,
        borderRadius: 5,
        marginVertical: 10,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 13,
        textAlign: 'center',
        color: COLORS.white,
    }
})

export { ButtonStart }
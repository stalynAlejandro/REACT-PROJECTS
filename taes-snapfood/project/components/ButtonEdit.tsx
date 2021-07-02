import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../constants/Colors'

interface IButtonEdit {
}

const ButtonEdit = ({}: IButtonEdit) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity>
                <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height:36,
        width:'45%',
        backgroundColor: COLORS.orange,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 13,
        textAlign: 'center',
        color: COLORS.white,
    }
})

export { ButtonEdit }
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../constants/Colors'

const ButtonBuy = () => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity>
                <Text style={styles.buttonText}>Comprar clase por 10€</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height:36,
        width:'80%',
        backgroundColor: COLORS.green,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 13,
        textAlign: 'center',
        color: COLORS.white,
    }
})

export { ButtonBuy }
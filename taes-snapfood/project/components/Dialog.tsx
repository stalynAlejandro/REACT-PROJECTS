import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../constants/Colors'

interface IErrorDeatil {
    message: string,
    buttonTitle: string,
    pressButton: ((event: GestureResponderEvent) => void) | undefined,
}

export const Dialog = (args: IErrorDeatil) => {
    return (
        <View style={styles.dialogContainer}>
            <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                colors={[COLORS.modal_white, COLORS.modal_white]}
                style={styles.dialogBox}>
                <Text style={styles.dialogErroText}>{args.message}</Text>
                <View style={styles.dialogButtons} >
                    <TouchableOpacity style={styles.buttonAccept} onPress={args.pressButton}>
                        <Text style={styles.dialogAccept}>{args.buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    dialogContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.transparent_gray
    },
    dialogBox: {
        height: 200,
        width: '80%',
        borderRadius: 10
    },
    dialogErroText: {
        textAlign: 'center',
        paddingVertical: 40,
        fontFamily: 'Roboto_400Regular',
        fontSize: 18
    },
    dialogButtons: {
        alignItems: 'center'
    },
    buttonAccept: {
        width: 100,
        height: 30,
        backgroundColor: COLORS.orange,
        borderRadius: 6,
        justifyContent: 'center'
    },
    dialogAccept: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: 'center'
    }
})
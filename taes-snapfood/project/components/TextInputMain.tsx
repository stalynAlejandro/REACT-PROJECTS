import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { COLORS } from '../constants/Colors'

interface ITextInputMain {
    placeHolder: string,
    value: string,
    setValue: Function,
    password: boolean
}

const TextInputMain = ({ placeHolder, value, setValue, password }: ITextInputMain) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputText}
                placeholder={placeHolder}
                value={value}
                onChangeText={(text) => setValue(text)}
                secureTextEntry={password} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        height: 60,
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center'
    },
    inputText: {
        paddingLeft: 10,
        fontSize: 18
    }
})

export { TextInputMain }
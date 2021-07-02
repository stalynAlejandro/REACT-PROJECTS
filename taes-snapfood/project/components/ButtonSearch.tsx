import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

interface IButtonSearch {
    action: Function
}

const ButtonSearch = ({action}: IButtonSearch) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => action()}>
            <Icon type={'ionicon'} size={40} name={'search-outline'} color={'#413F40'} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        top: 20,
        position: 'absolute',
        right: 30
    }
})

export { ButtonSearch }
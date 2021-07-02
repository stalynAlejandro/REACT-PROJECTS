import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../constants/Colors'


interface IFollowers {
    segdores: string
    segdos: string
}
const Followers = ({ segdores, segdos }: IFollowers) => {
    return (
        
        <Text style={styles.dark}>
            <Text style={{color: 'orange'}}>{segdores+" "}</Text>
            seguidores · 
            <Text style={{color: 'orange'}}>{" "+ segdos+" "}</Text>
            siguiendo
        </Text>
    )
}

const styles = StyleSheet.create({
    dark: {
        display: 'flex',
        textAlign: 'center', 
        fontSize: 15, 
        fontWeight: 'bold',
        color: 'black'
    },
})

export { Followers }
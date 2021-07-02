import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants/Colors'
import { Followers } from '../components'

interface IProfile {
    picture: string,
    name: string,
    about: string,
    follows: Number,
    followers: Number
}

const Profile = ({ picture, name, about, follows, followers }: IProfile) => {
    return (
        <View style={styles.infoContainer}>
            <Image
                source={(picture) ? { uri: `${picture}` } : require('../assets/images/AddImage.png')}
                style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: COLORS.gray }} />
            <Text style={styles.title}>{name}</Text>
            <Text>{about}</Text>
            <Followers segdores={followers?.toString()} segdos={follows?.toString()}></Followers>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 30,
    },
    infoContainer: {
        alignItems: 'center'
    },
})

export { Profile }
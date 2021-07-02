import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { COLORS } from '../constants/Colors'
import { IUser } from '../constants/Types'
import { addToFollowers, followUser } from '../store/actions/followActions'

interface IButtonFollow {
    user: IUser,
    userToFollow: IUser
}

const ButtonFollow = (args: IButtonFollow) => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity onPress={()=>{dispatch(followUser(args.userToFollow.Email,args.user)),dispatch(addToFollowers(args.user.Email,args.userToFollow))}}>
            <Text style={styles.follow}>Seguir</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    follow: {
        width: 80,
        height: 25,
        borderRadius: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: COLORS.green,
        color: '#fefefe',
        fontWeight: 'bold',
    }
})

export { ButtonFollow }
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { COLORS } from '../constants/Colors'
import { IUser } from '../constants/Types'
import { removeUserFromFollowers, unfollowUser } from '../store/actions/followActions'

interface IButtonUnfollow {
    userToUnfollow: IUser,
    user: IUser
}
const ButtonUnfollow = (args: IButtonUnfollow) => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity onPress={()=>{dispatch(unfollowUser(args.userToUnfollow.Email,args.user)),dispatch(removeUserFromFollowers(args.user.Email,args.userToUnfollow))}}>
            <Text style={styles.Unfollow}>Dejar de Seguir</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Unfollow: {
        width: 120,
        height: 25,
        borderRadius: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: COLORS.red,
        color: '#fefefe',
        fontWeight: 'bold',
    }
})

export { ButtonUnfollow }
import React, { useState } from 'react'
import { Text, TouchableOpacity, Image, View, TextInput } from 'react-native'
import styles from './EditProfileScreen.style'
import * as ImagePicker from 'expo-image-picker'
import { IUser } from '../../constants/Types'

interface ISelectImageFromDevice {
    user: IUser,
    setImage: Function
}

export const SelectImageFromDevice = (args: ISelectImageFromDevice) => {
    const selectPhotoFromDevice = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled) {
            return;
        }
        args.setImage({ ...args.user, ProfileImage: pickerResult })
    }

    return (
        <TouchableOpacity onPress={selectPhotoFromDevice}>
            <Image style={styles.imageContainer} source={(args.user.ProfileImage) ? { uri: args.user.ProfileImage.uri } : require('../../assets/images/AddImage.png')} />
        </TouchableOpacity>
    )
}

interface IProfileForm {
    user: IUser,
    editUser: Function,
    saveUser: Function
}

export const ProfileForm = (args: IProfileForm) => {

    const changeName = (newName: string) => {
        args.editUser({ ...args.user, Name: newName })
    }

    const changeAbout = (newAbout: string) => {
        args.editUser({ ...args.user, About: newAbout })
    }

    return (
        <View style={styles.formContainer}>

            {/* EDIT NAME */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    value={args.user.Name}
                    onChangeText={(text) => changeName(text)}
                />
            </View>

            {/* EDIT ABOUT */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Descripción</Text>
                <TextInput
                    numberOfLines={2}
                    style={styles.input}
                    value={args.user.About}
                    onChangeText={(text) => changeAbout(text)} />
            </View>

            {/* EDIT EMAIL */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    editable={false}
                    style={{ ...styles.input, borderWidth: 0 }}
                    value={args.user.Email} />
            </View>


            {/* SAVE EDIT PROFILE */}
            <TouchableOpacity style={styles.button} onPress={() => args.saveUser()}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
        </View>
    )
}

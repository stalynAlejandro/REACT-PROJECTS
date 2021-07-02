import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { COLORS } from '../constants/Colors'
import { editFolderName, deleteFolder } from '../store/actions/recipeActions'
import { IUser, IFolder } from '../constants/Types'
interface IEditFolder {
    folderEdit: IFolder,
    closeModal: Function,
}
const EditFolder = (args: IEditFolder) => {
    const userState = useSelector((state: any) => state.firebase.profile) as IUser
    const [folder, setFolder] = useState<string>(args.folderEdit.Title)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.containerHeader}>
                    <Text style={{ fontWeight: 'bold' }}>Editar Carpeta {"\n"}</Text>
                    <TouchableOpacity onPress={() => args.closeModal()}>
                        <Image source={require("../assets/images/cross-close.png")} style={{ height: 20, width: 20 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputText}
                        value={folder}
                        onChangeText={(text) => setFolder(text)} />
                </View>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.editfolderContainer} onPress={() => {
                            args.closeModal()
                            navigation.goBack()
                            dispatch(editFolderName(folder, args.folderEdit, userState))
                        }}>
                        <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: -17, color: "white" }}>{"\n"}Guardar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deletefolderContainer} onPress={() => {
                            args.closeModal()
                            navigation.goBack()
                            dispatch(deleteFolder(args.folderEdit, userState))
                        }}>
                        <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: -17, color: "white" }}>{"\n"}Eliminar Carpeta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: "black",
        alignSelf: 'center',
        width: 280
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 280
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        width: "90%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    inputText: {
        paddingLeft: 10,
        fontSize: 18,
        width: 200
    },
    inputContainer: {
        width: '100%',
        height: 40,
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center',
    },
    editfolderContainer: {
        width: '40%',
        alignSelf: 'flex-start',
        marginTop: 10,
        backgroundColor: "#97C7BB",
        padding: 10,
        borderRadius: 10,

    },
    deletefolderContainer: {
        width: '50%',
        alignSelf: 'flex-start',
        marginTop: 10,
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,

    },
})
export { EditFolder }
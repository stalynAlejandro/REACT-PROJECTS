import React, {useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Modal } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { createFolder } from '../store/actions/recipeActions'
import { COLORS } from '../constants/Colors'

interface INewFolder {
    visible: boolean
    setVisible: any
}

const NewFolder = (args: INewFolder) => {
    const [folder, setFolder] = useState<string>('')
    const userProfileState = useSelector((state: any) => state.firebase.profile)
    const dispatch=useDispatch();
    const pressNewFolder = () => { folder !== '' ? dispatch(createFolder(folder,userProfileState)) : setFolder('') }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={args.visible}
            onRequestClose={args.setVisible}>

            <View style={styles.modalPosition}>
                <View style={styles.modalView}>
                    <View style={styles.modalContents}>
                        <Text style={styles.modalText}>Nueva Carpeta</Text>
                        <TouchableOpacity  onPress={args.setVisible}>
                            <Icon type={'ionicon'} size={26} name={'close-outline'} color={'#000000'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputText}
                            placeholder={'Nombre de la Carpeta'}
                            value={folder}
                            onChangeText={(text) => setFolder(text)} />
                    </View>
                    <View style={styles.line}>
                        <TouchableOpacity style={styles.newfolderContainer} onPress={()=>{ pressNewFolder(); args.setVisible(false);}}>
                            <Icon type={'ionicon'} size={25} name={'add-outline'} color={'#000000'} />
                            <Text style={styles.modalText}> Crear Carpeta </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalPosition: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 20,
        elevation: 5
    },
    modalContents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1
    },
    modalText: {
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
    inputContainer: {
        height: 40,
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        marginVertical: 10
    },
    inputText: {
        padding: 10,
        fontSize: 18
    },
    line: { 
        borderTopWidth: 1
    },
    newfolderContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: COLORS.green,
        padding: 10,
        borderRadius: 10
    }    
})

export { NewFolder }
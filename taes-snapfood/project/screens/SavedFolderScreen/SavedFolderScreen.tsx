import styles from './SavedFolderScreen.style'
import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { IRecipeState } from '../../store/reducers/recipeReducer'
import { clearFolderSuccess, clearRecipeError } from '../../store/actions/recipeActions'
import { IRecipe, IFolder, IUser } from '../../constants/Types'
import { Dialog, EditFolder, PostHome } from '../../components'

interface IPost {
    recipe: IRecipe
}

const Post = (args: IPost,) => {
    const navigation = useNavigation();
    const usersList = useSelector((state: any) => (state.firestore.ordered.users)) as IUser[]
    const author = usersList?.filter((user: any ) => user?.Email === args.recipe.AuthorEmail)[0]

    return (
        <PostHome
            onPressPost={() => navigation.navigate('Recipe', { showRecipe: args.recipe })}
            onPressAuthor={() => {
                navigation.navigate('Config', {
                    screen: 'Profile',
                    params: { user: args.recipe.AuthorEmail }
                })}}
            cookName={author.Name} 
            cookImage={author.ProfileImageUrl} 
            recipeDescription={args.recipe.Name} 
            recipeImage={args.recipe.ImageURL}
            recipe={args.recipe}/>
    )
}

function SavedFolderScreen({ route } : { route: any }) {
    const dispatch = useDispatch()
    const folder = route.params.folder as IFolder
    const { editOptions } = route.params
    const [modalVisible, setModalVisible] = useState(false);
    const recipeState = useSelector((state: any) => state.recipe) as IRecipeState
    
    return (
        <View>     
            <ScrollView>
                <Modal
                    animationType="fade" 
                    transparent={true} 
                    visible={modalVisible} 
                    onRequestClose={() => { setModalVisible(!modalVisible) }}>
                    <EditFolder closeModal={() => setModalVisible(false)} folderEdit={folder} />
                </Modal>
                <Text style={styles.titleFolder}>{folder.Title}</Text>

                {(editOptions) &&
                    <TouchableOpacity style={styles.settingsButton} onPress={() => setModalVisible(true)}>
                        <Icon type={'ionicon'} size={40} name={'create-outline'} color={'#808B96'} />
                    </TouchableOpacity>
                }
           
                { folder.Recipes && folder.Recipes.reverse().map((recipe: IRecipe, i: number) => {
                    return ( <Post recipe={recipe} /> )
                })}
            </ScrollView>

            { (recipeState.recipeError) && 
                <Dialog message={recipeState.recipeError} 
                    buttonTitle="Aceptar" 
                    pressButton={()=>dispatch(clearRecipeError())}/> 
            }
            { (recipeState.isCreateFolderSuccessful) && 
                <Dialog message={"La carpeta se ha creado correctamente"} 
                buttonTitle="Aceptar" 
                pressButton={()=>dispatch(clearFolderSuccess())}/> 
            }
        </View>
    )
}

export { SavedFolderScreen }
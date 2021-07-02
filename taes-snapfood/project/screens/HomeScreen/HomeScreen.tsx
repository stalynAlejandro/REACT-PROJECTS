import styles from './HomeScreen.style'
import React from 'react'
import { View, ScrollView, Text, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { clearFolderSuccess, clearRecipeError } from '../../store/actions/recipeActions';
import { IRecipeState } from '../../store/reducers/recipeReducer';
import { IRecipe, IUser } from '../../constants/Types'
import { TitleMain, Dialog, PostHome } from '../../components'

function HomeScreen() {
    useFirestoreConnect([
        { collection: 'recipes' },
        { collection: 'users' }
    ])
    
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const followedUserEmails = useSelector((state: any) => state.firebase.profile).Follows as string[]
    const usersList = useSelector((state: any) => (state.firestore.ordered.users)) as IUser[]
    const filteredUserList = usersList?.filter(user => followedUserEmails?.includes(user?.Email))
    var recipes = new Array<IRecipe>()
    filteredUserList?.map(user => recipes = recipes.concat(user.RecipesCreated))
    recipes.sort((a,b) => (a.DateOfCreation > b.DateOfCreation ? -1 : a.DateOfCreation < b.DateOfCreation ? 1 : 0))
    const recipeState = useSelector((state: any) => state.recipe) as IRecipeState
    
    return (
        <View>
            <ScrollView>
                <View style={styles.title}>
                    <TitleMain title={'SnapFood'}/>
                </View>
                { recipes.length!=0 ?
                    <View>
                    {recipes && recipes.map((recipe: any, i: number) => {
                        const author = usersList?.filter((user: any ) => user?.Email === recipe.AuthorEmail)[0]
                        return(
                            <PostHome
                                onPressPost={() => navigation.navigate('Recipe', { showRecipe: recipe })}
                                onPressAuthor={() => {
                                    navigation.navigate('Config', {
                                        screen: 'Profile',
                                        params: { user: recipe.AuthorEmail }
                                    })}}
                                cookName={author.Name} 
                                cookImage={author.ProfileImageUrl} 
                                recipeDescription={recipe.Name} 
                                recipeImage={recipe.ImageURL}
                                recipe={recipe} />
                        )
                    })}
                </View>
                :
                <View style={styles.containerNoRecipes}>
                        <Image source={require('../../assets/images/home-default.png')}></Image>
                    <View style={{paddingTop: 60,marginRight:130}}>
                        <Image source={require('../../assets/images/arrow_home.png')} style={styles.arrow_style}></Image>
                    </View>
                </View>
            }
            
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

export { HomeScreen }
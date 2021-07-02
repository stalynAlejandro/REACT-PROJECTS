import styles from './SearchedScreen.style'
import React, { useState } from 'react'
import { View, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { IRecipeState } from '../../store/reducers/recipeReducer'
import { clearFolderSuccess, clearRecipeError } from '../../store/actions/recipeActions'
import { IUser } from '../../constants/Types'
import { PostHome, TextInputMain, ButtonSearch, Dialog } from '../../components'

function SearchedScreen({route} : {route: any}) {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const tag = route.params.paramKey
    const search = route.params.search
    const mainRecipe = route.params.param
    const recipes = route.params.recipesFilter
    const recipeState = useSelector((state: any) => state.recipe) as IRecipeState
    const usersList = useSelector((state: any) => (state.firestore.ordered.users)) as IUser[]
    const [dataSourceCords, setDataSourceCords] = useState<number[]>([])
    const [buscar, setBuscar] = useState<string>(tag !== undefined ? tag : search)
    const [scrollViewReference, setScrollViewReference] = useState<ScrollView>()
    const [scrollToIndex, setScrollToIndex] = useState<number>(0)

    const scrollToSelected = () => {
        if (dataSourceCords.length > scrollToIndex) {
            scrollViewReference?.scrollTo({
                x: 0,
                y: dataSourceCords[scrollToIndex],
                animated: false
            });
        }
    }

    const pressSearch = async () => {
        navigation.navigate('Search2', {paramKey: undefined, search: buscar}) 
    }

    const Posts = () => {
        return (
            <View>       
                {tag !== undefined ?
                    recipes.map((recipe: any, i: number) => {
                        const author = usersList?.filter((user: any ) => user?.Email === recipe.AuthorEmail)[0]
                        if (recipe.id === mainRecipe.id){
                            setScrollToIndex(i);
                        }
                        return (
                            <View key={i}
                                onLayout={(event) => {
                                    const layout = event.nativeEvent.layout;
                                    dataSourceCords[i] = layout.y;
                                    setDataSourceCords(dataSourceCords);
                                  }}>
                                <PostHome 
                                    onPressPost={() => navigation.navigate('Recipe', { showRecipe: recipe })}
                                    onPressAuthor={() => {
                                        navigation.navigate('Config', {
                                        screen: 'Profile',
                                        params: { user: recipe.AuthorEmail }
                                        })}}
                                    cookName={author?.Name} 
                                    cookImage={author?.ProfileImageUrl} 
                                    recipeDescription={recipe.Name} 
                                    recipeImage={recipe.ImageURL}
                                    recipe={recipe}/>
                            </View>
                        )
                    })
                    :
                    recipes.map((recipe: any, i: number) => {
                        const author = usersList?.filter((user: any ) => user?.Email === recipe.AuthorEmail)[0]
                        if (recipe.id === mainRecipe.id){
                            setScrollToIndex(i);
                        }
                        return (
                            <View key={i}
                                onLayout={(event) => {
                                    const layout = event.nativeEvent.layout;
                                    dataSourceCords[i] = layout.y;
                                    setDataSourceCords(dataSourceCords);
                                  }}>
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
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View>       
            <ScrollView ref={(ref : ScrollView) => { setScrollViewReference(ref) }} onLayout={scrollToSelected}>
                <View style={styles.container}>
                    <TextInputMain placeHolder={"Buscar..."} value={buscar} setValue={setBuscar} password={false}/>
                    <ButtonSearch action={pressSearch} />
                </View>
                <View style={styles.lineStyle} />
                <Posts/>
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

export {SearchedScreen}
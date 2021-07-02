import styles from './Search2Screen.style'
import React, { useState } from 'react'
import { View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { TextInputMain, ButtonSearch } from '../../components'
import { IRecipe } from '../../constants/Types'

interface ISearchResults {
    recipes: IRecipe[],
    tag: string,
    buscar: string,
}

function Search2Screen({route} : {route: any}) {
    useFirestoreConnect([
        { collection: 'recipes' }
    ])

    const navigation = useNavigation()
    const recipes = useSelector((state: any) => (state.firestore.ordered.recipes))
    const tag = route.params.paramKey
    const search = route.params.search
    const [buscar, setBuscar] = useState<string>(tag !== undefined ? tag : search) // No funciona bien, solo se actualiza el search la primera vez que se va a search2
    const searchSplit = search?.toLocaleLowerCase().split(' ');

    const recipesFilter =  tag !== undefined ?
        recipes.filter((recipe: any)=>recipe.Tags.includes(tag.toLowerCase())) :
        recipes.filter((recipe: IRecipe)=> {
            var isValid = true;
            searchSplit.forEach((word: string) => {
                if (!recipe.Name.toLocaleLowerCase().includes(word)){
                    isValid = false;
                }
            })
            return isValid;
        })

    const pressSearch = async () => {
        navigation.navigate('Search2', {paramKey: undefined, search: buscar})
    }

    const SearchResults = (args: ISearchResults) => {
        
        return (
            <View style={styles.resultImages}>
                { args.tag !== undefined ?
                    args.recipes.map((recipe: any, i: number) => {                    
                        return (
                            <View key={i}>
                                { (i % 4 == 0) ?
                                    <TouchableOpacity onPress={() => navigation.navigate('Searched', {paramKey: args.tag, param: recipe, recipesFilter: recipesFilter})}>
                                        <Image style={styles.resultImageXL} source={{uri: recipe.ImageURL}}></Image>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => navigation.navigate('Searched', {paramKey: args.tag, param: recipe, recipesFilter: recipesFilter})}>
                                        <Image style={styles.resultImage} source={{uri: recipe.ImageURL}}></Image>
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    })
                    :
                    args.recipes.map((recipe: any, i: number) => {
                        return (
                            <View key={i}>
                                { (i % 4 == 0) ?
                                    <TouchableOpacity onPress={() => navigation.navigate('Searched', {search: args.buscar,paramKey:undefined, param: recipe, recipesFilter: recipesFilter})}>
                                        <Image style={styles.resultImageXL} source={{uri: recipe.ImageURL}}></Image>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => navigation.navigate('Searched', {search: args.buscar,paramKey:undefined, param: recipe, recipesFilter: recipesFilter})}>
                                        <Image style={styles.resultImage} source={{uri: recipe.ImageURL}}></Image>
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInputMain placeHolder={"Buscar..."} value={buscar} setValue={setBuscar} password={false}/>
                <ButtonSearch action={pressSearch} />
            </View>
            <View style={styles.lineStyle} />
            <SearchResults recipes={recipesFilter} tag={tag} buscar={search}/>
        </ScrollView>
    )
}

export { Search2Screen }
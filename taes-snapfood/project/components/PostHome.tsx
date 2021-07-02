import { DescriptionRecipePost } from '.'
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { IRecipe } from '../constants/Types'

interface ICookPost {
    cookName: string
    cookImage: any
    onPressAuthor: Function
}

const CookPost = (args: ICookPost) => {
    return (   
        <TouchableOpacity onPress={() => args.onPressAuthor()} style={styles.author}>
            <Image style={styles.imageAuthor} source={{uri: args.cookImage}}/>
            <Text style={styles.nameAuthor}>{args.cookName}</Text>
        </TouchableOpacity>
    )
}

interface IRecipePost {
    recipeImage: any
    recipeDescription: string
    onPressPost: Function
    recipe: IRecipe
}

const RecipePost = (args: IRecipePost) => {
    return (
        <View>
            <TouchableOpacity onPress={() => args.onPressPost()}>
                <Image style={styles.imageRecipe} source={{uri: args.recipeImage}} />
            </TouchableOpacity>
            <View style={styles.descriptionRecipe}>
                <DescriptionRecipePost 
                    description={args.recipeDescription}
                    recipe={args.recipe} />
            </View>
        </View>
    )
}

interface IPost {
    cookName: string,
    cookImage: any,
    recipeImage: any,
    recipeDescription: string,
    onPressPost: Function,
    onPressAuthor: Function
    recipe: IRecipe
}

const PostHome = (args: IPost) => {
    return (
        <View style={{marginBottom: 25}}>
            <CookPost 
                onPressAuthor={() => args.onPressAuthor()} 
                cookName={args.cookName} 
                cookImage={args.cookImage}/>
            <RecipePost
                onPressPost={() => args.onPressPost()} 
                recipeImage={args.recipeImage} 
                recipeDescription={args.recipeDescription} 
                recipe={args.recipe} />
        </View>
    )
}

const styles = StyleSheet.create({
    author: {
        marginLeft: 15,
        marginBottom: 10,
        flexDirection: 'row'
    },
    nameAuthor: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        marginLeft: 10,
        textAlignVertical: 'center'
    }, 
    imageAuthor: {
        width: 40, 
        height: 40,
        borderRadius:20
    },
    imageRecipe: {
        height: 270
    },
    descriptionRecipe: {
        marginLeft: 15
    }
})

export { PostHome }
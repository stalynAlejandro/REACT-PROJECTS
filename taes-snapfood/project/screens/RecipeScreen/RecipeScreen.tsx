import styles from './RecipeScreen.style'
import { Presentation, Ingredients, Process, Author, Comment } from './RecipeScreen.UI'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { IRecipe } from '../../constants/Types'
import { format } from 'date-fns-tz'
import { useSelector } from 'react-redux'

function RecipeScreen({ route } : { route: any }) {
    const recipe = route.params.showRecipe as IRecipe
    const formatDate = format(recipe.DateOfCreation.toDate(), 'dd, MMMM yyyy')
    const usersList = useSelector((state: any) => (state.firestore.ordered.users))
    const author = usersList?.filter((user: any ) => user?.Email === recipe.AuthorEmail)[0]

    return (
        <ScrollView style={{ backgroundColor: COLORS.white }}>
            <Presentation
                name={recipe.Name}
                imagenSrc={recipe.ImageURL}
                duration={recipe.Duration}
                tags={recipe.Tags}
                stars={recipe.Stars}
            />
            <Ingredients ingredients={recipe.Ingredients} />
            <Process process={recipe.Process} />
            <View style={styles.dateText}>
                <Text style={{ fontWeight: 'bold' }}> Fecha de publicación: </Text>
                <Text>{formatDate} </Text>
            </View>
            <View style={styles.lineStyle} />
            <Author
                Name={author.Name}
                About={author.About}
                ImageUrl={author.ProfileImageUrl}
                Email={author.Email}
            />
            <View style={styles.lineStyle} />
            <Comment />
        </ScrollView>
    )
}

export { RecipeScreen }
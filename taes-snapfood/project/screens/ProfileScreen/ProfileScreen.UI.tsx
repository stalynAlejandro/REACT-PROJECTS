import styles from './ProfileScreen.style'
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ProfileVideo } from '../../components/ProfileVideo'
import { IRecipe } from '../../constants/Types'

interface IFirstRoute {
    recipes: IRecipe[]
}

export const FirstRoute = (args: IFirstRoute) => {
    const navigation = useNavigation()

    return (
        <View style={styles.explore}>
            {(args.recipes) && args.recipes.map((recipe: IRecipe, i: number) => {
                return (
                    <View key={i}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Recipe', {
                                    showRecipe: recipe
                                })}>

                            <Image source={{ uri: `${recipe.ImageURL}` }} style={styles.img}></Image>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
};

interface ISecondRoute {
    videos: any
    isMyProfile: boolean
}

export const SecondRoute = (args: ISecondRoute) => (
    <View>
        { args.videos.map((video: any, i: number) => {
            return (
                <View key={i}>
                    <ProfileVideo title={video.title} description={video.description} date={video.date} hour={video.hour} image={video.image} transmitted={video.transmitted} isMyProfile={args.isMyProfile}></ProfileVideo>
                </View>
            )
        })}
    </View>
);
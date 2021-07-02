import styles from './SearchScreen.style'
import React, { useState } from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInputMain, ButtonSearch} from '../../components'

interface IExploreComponent {
    title: string,
    categories: any
}

interface ICategoryComponent {
    title: string,
    image: any,
    item: number
}

function SearchScreen() {
    const navigation = useNavigation();
    const [buscar, setBuscar] = useState<string>('')
    const titleRecommended = 'Recomendados para ti'
    const titlePopular = 'Popular en SnapFood'
    const categories =[
        { title : 'Vegetariano',        image  : require('../../assets/images/hojaldreconQueso.png') },
        { title : 'Croquetas',          image  : require('../../assets/images/croquetas.png') },
        { title : 'Amantes del Queso',  image  : require('../../assets/images/AmantedeQueso.png') },
        { title : 'Asiática',           image  : require('../../assets/images/Asiática.png') },
        { title : 'Marroquí',           image  : require('../../assets/images/Marroquí.png') },
        { title : 'Pasta',              image  : require('../../assets/images/pasta.png') }
    ]
    
    const pressSearch = async () => {
        setBuscar('')
        navigation.navigate('Search2', {paramKey: undefined, search: buscar}) 
    }

    const ExploreComponent = (args: IExploreComponent) => {
        return (
            <View>
                <Text style={styles.titleExplore}>{args.title}</Text>
                <View style={styles.explore} >
                    { args.categories.map((category: any, i: number) => {
                            return(
                                <View key={i}>
                                    <CategoryComponent item={i} title={category.title} image={category.image}></CategoryComponent>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }

    const CategoryComponent = (args: ICategoryComponent) => {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('Search2', {paramKey: args.title}) }}>
                <ImageBackground style={styles.containerCategory} source={args.image} >
                    <Image style={styles.categoryImage} source={require('../../assets/images/fondoImagen.png')} ></Image>
                    <Text style={styles.elementTitle}>{args.title}</Text>                
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInputMain placeHolder={"Buscar..."} value={buscar} setValue={setBuscar} password={false}/>
                <ButtonSearch action={pressSearch} />
            </View>
            <View style={styles.lineStyle} />
            <ExploreComponent title={titleRecommended} categories={categories}/>
            <ExploreComponent title={titlePopular} categories={categories}/>
        </ScrollView>
    )
}

export { SearchScreen }
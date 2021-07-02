import styles from './RecipeScreen.style'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { IUser } from '../../constants/Types'
import { ButtonFollow } from '../../components/ButtonFollow'
import { ButtonUnfollow } from '../../components/ButtonUnfollow'

const Stars = (args: any) => {
    const fields: JSX.Element[] = [];

    for (let i = 0; i < args; i++) {
        fields.push(<Icon type={'ionicon'} size={20} name={'star'} color={'#ef8a48'} />);
    }

    for (let i = 0; i < (5 - args); i++) {
        fields.push(<Icon type={'ionicon'} size={20} name={'star-outline'} />);
    }

    return fields;
}

const Tags = (args: any) => {
    let rowTags = [];
    let tags = [];

    for (let i = 0; i < args.length; i++) {
        rowTags.push(args[i]);
        if((i+1)%3 == 0){
            let aux = JSON.parse(JSON.stringify(rowTags)); 
            tags.push(aux);
            rowTags.length = 0;
        }
    }

    let aux = JSON.parse(JSON.stringify(rowTags)); 
    tags.push(aux);

    return tags;
}

interface IPresentation {
    name: string,
    imagenSrc: any,
    duration: number,
    tags: string[],
    stars: any
}

export const Presentation = (args: IPresentation) => {
    const navigation = useNavigation()

    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.headboard}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon type={'ionicon'} size={40} name={'return-up-back-outline'} color={'#FFFFFF'} />
                </TouchableOpacity>
                <Text style={styles.titleText}>{args.name}</Text>
            </View>
            <Image style={styles.image} source={{ uri: `${args.imagenSrc}` }} />
            <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Valoración</Text>
            <View style={styles.stars}>
                {Stars(args.stars)}
            </View>
            <Grid >
                <Col style={styles.rowContainer}>
                    <Icon type={'ionicon'} size={35} name={'stopwatch-outline'} />
                    <Text style={{ fontSize: 15 }}> {args.duration} min </Text>
                </Col>
                <View style={styles.verticleLine}></View>
                <Col>
                    {Tags(args.tags).map(tag => {
                        return (
                            <Row style={{ marginTop: 2.5 , marginBottom: 2.5 }}>
                                {tag.map((tag: any) =>
                                    <View style={styles.tagContainer}>
                                        <Text style={{ fontSize: 9 }}> {tag} </Text>
                                    </View>
                                )}
                            </Row>)}
                        )
                    }
                </Col>
            </Grid>
        </View>
    )
}

export const Ingredients = ({ ingredients }: any) => {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descritionTitleText}>Ingredientes</Text>
            {Object.values(ingredients).map((ingr: any) =>
                <Text style={styles.descriptionBodyText} >- {ingr.quantity} {ingr.quantityType} de {ingr.ingredient}.</Text>
            )}
        </View>
    )
}

export const Process = ({ process }: any) => {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descritionTitleText}>Procedimiento</Text>
            <Text>{process}</Text>
        </View>
    )
}

export const NutritionalValue = ({ nutritions }: any) => {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descritionTitleText}>Valor Nutricional</Text>
            <Text style={styles.descriptionBodyText}>Calorias (100 g): {nutritions[0].nutritionC} kcal.</Text>
            <Text style={styles.descriptionBodyText}>Grasas: {nutritions[1].nutritionG} g.</Text>
            <Text style={styles.descriptionBodyText}>Hidratos de Carbono: {nutritions[2].nutritionH} g.</Text>
            <Text style={styles.descriptionBodyText}>Proteinas: {nutritions[3].nutritionP} g.</Text>
        </View>
    )
}

interface IAuthor {
    Name: string,
    About: string,
    ImageUrl: any,
    Email: string
}

export const Author = (args: IAuthor) => {
    const navigation = useNavigation()
    const userLoggedIn = useSelector((state: any) => state.firebase.profile) as IUser
    const usersList = useSelector((state: any) => (state.firestore.ordered.users))
    const foreignUser = usersList.filter((user: any ) => user.Email === args.Email)[0]
    const isMyProfile = foreignUser === null || userLoggedIn.Email === foreignUser?.Email

    return (
        <View style={styles.cook}>
            <Text style={styles.cookText}>Cocinero/a</Text>
            <View style={styles.profile}>
                <TouchableOpacity style={styles.profile} onPress= {() => {
                                            navigation.navigate('Config', {
                                            screen: 'Profile',
                                            params: { user:args.Email }
                                          })}}>
                    <Image
                        style={styles.imageProfile}
                        source={(args.ImageUrl) ? { uri: `${args.ImageUrl}` } : require('../../assets/images/AddImage.png')}
                    />
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{args.Name}</Text>
                        <Text style={{ fontSize: 12 }}>{args.About}</Text>
                    </View>
                </TouchableOpacity>

                { (!isMyProfile) && (
                    <View style={styles.buttons} >
                    { 
                        (userLoggedIn.Follows.includes(foreignUser?.Email)) ? 
                        <ButtonUnfollow user={userLoggedIn} userToUnfollow={foreignUser}/> : 
                        <ButtonFollow user={userLoggedIn} userToFollow={foreignUser}/>
                    }
                    </View>)
                }
            </View>
        </View>
    )
}

export const Comment = () => {
    return (
        <View style={styles.comments}>
            <Text style={styles.cookText}>Comentarios</Text>
            <Text style={{ left: 145 }}>Valorar: </Text>
            <View style={styles.starsComments}>
                <Icon type={'ionicon'} size={15} name={'star-outline'} />
                <Icon type={'ionicon'} size={15} name={'star-outline'} />
                <Icon type={'ionicon'} size={15} name={'star-outline'} />
                <Icon type={'ionicon'} size={15} name={'star-outline'} />
                <Icon type={'ionicon'} size={15} name={'star-outline'} />
            </View>
        </View>
    )
}

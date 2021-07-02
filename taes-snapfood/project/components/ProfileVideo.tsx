import React from 'react'
import { View, Image,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import {ButtonEdit} from '../components/ButtonEdit'
import {ButtonStart} from '../components/ButtonStart'
import { ButtonJoin } from '../components/ButtonJoin'
import { ButtonBuy } from '../components/ButtonBuy'

interface IProfileVideo {
    title: string
    description: string
    date: string
    hour: string
    image: any
    transmitted: any
    isMyProfile: boolean
}

const ProfileVideo = ({title, description, date, hour, image, transmitted, isMyProfile}: IProfileVideo) => {
    return ( 
        <View style={{ flexDirection: 'row', width: (Dimensions.get('window').width) - 185}}>
            <TouchableOpacity style={{ alignSelf: 'center',}}>
                <Image source={image} style={styles.image}></Image>
            </TouchableOpacity>
            <View>
                <Text style={styles.title} >{title}</Text>
                { (transmitted == true) ? 
                    <Text style={styles.date}>Transmitido</Text> : 
                    <Text style={styles.date}>Programado para</Text>
                }
                <Text style={styles.date}>{date + ' - ' + hour}</Text>
                <Text style={styles.description}>{description}</Text>
                { !(isMyProfile) ? ((transmitted == false) ? <ButtonJoin/> : <ButtonBuy/> ):
                    <View style={{flexDirection: 'row'}}>
                        <ButtonEdit/>
                        {(transmitted == true) ? null : <ButtonStart/>}
                    </View>
                }                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 16,
        marginTop: 18,
    },
    image: {
        width: Dimensions.get('window').width / 2.6,
        height: 130, 
        borderRadius: 8, 
        margin:13
    },
    description:{
        fontSize: 12,
        fontWeight: 'bold'
    },
    date:{
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.48)',
    },
})

export { ProfileVideo }
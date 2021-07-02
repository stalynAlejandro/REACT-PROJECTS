import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'

export default StyleSheet.create({
    dateText: {
        flexDirection: 'row',
        fontSize: 16,
        alignSelf: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 15
    },
    lineStyle: {
        backgroundColor: '#97C7BB',
        height: 1,
        position: 'relative',
        marginBottom: 10,
        width: '100%'
    },
    // UI
    headboard: {
        backgroundColor: '#fed6ac',
        width: '100%',
        height: 70,
        marginBottom: 25,
        paddingTop: 5
    },
    backButton: {
        paddingTop: 15,
        left: 10,
        alignSelf: 'flex-start',
    },
    titleText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        bottom: 33,
        marginHorizontal: 100,
    },
    image: {
        height: 150,
        width: 250,
        borderRadius: 5,
        marginBottom: 6
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    verticleLine: {
        width: 1,
        backgroundColor: '#909090'
    },
    tagContainer: {
        height: 15,
        width: 60,
        borderRadius: 9,
        alignItems: 'center',
        marginHorizontal: 4,
        backgroundColor: '#CED6DE'
    },
    descriptionContainer: {
        marginTop: 20,
        marginLeft: 30,
    },
    descritionTitleText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6
    },
    descriptionBodyText: {
        marginLeft: 10,
        marginRight: 22,
        color: COLORS.dark_gray
    },
    cook: {
        paddingHorizontal: 30,
        marginBottom: 10
    },
    cookText: {
        fontWeight: 'bold',
        fontSize: 14,
        left: 2
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageProfile: {
        marginTop: 10,
        marginRight: 20,
        height: 70,
        width: 70,
        borderRadius: 100,
        backgroundColor: COLORS.gray // Color de fondo por si no hay foto de perfil
    },
    buttons: {
        position: 'absolute',
        right: 0        
    },
    comments: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 30,
        marginBottom: 10
    },
    starsComments: {
        flexDirection: 'row',
        left: 150
    }
})
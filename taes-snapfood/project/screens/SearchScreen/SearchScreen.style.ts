import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30
    },
    lineStyle: {
        backgroundColor: COLORS.green,
        height: 1,
        marginTop: 6
    },
    titleExplore: {
        textAlign: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        color: COLORS.orange,
        marginVertical: 10
    },
    explore: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    containerCategory: {
        marginVertical: 3.5,
        marginLeft: 3.5,
        marginRight: 3.5,
        justifyContent: 'center'
    },
    categoryImage: {
        width: (Dimensions.get('window').width/2) - 10,
        height: 100
    },
    elementTitle: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 16,
        alignSelf: 'center',
        position: 'absolute',
        color: COLORS.white
    }
})
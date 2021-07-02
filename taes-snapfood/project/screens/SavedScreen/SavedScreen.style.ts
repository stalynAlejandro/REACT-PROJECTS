import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants/Colors'

export default StyleSheet.create({
    rowTitle:{
        height: 90, 
        justifyContent: 'space-evenly'
    },
    titleFolder: {
        top: 40,
        fontFamily: 'Roboto_700Bold',
        fontSize: 30,
        color: COLORS.orange
    },
    settingsButton: {
        top: 30,
        position: 'absolute',
        right: 40
    },
    folder: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    folderContainer: { 
        marginLeft: 20, 
        marginTop: 20 
    },
    imageBackground: {
        opacity: 0.6, 
        backgroundColor: 'black'
    },
    categoryImage: {
        justifyContent: 'center',
        overflow: 'hidden',
        width: (Dimensions.get('window').width/2)-30,
        borderRadius: 8,
        height: 120
    },    
    elementTitle: {
        textAlign: "center",  
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        color: COLORS.white
    },
    rowLesson:{
        height: 190
    },
    lessons: {
        top: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    lineStyle: {
        backgroundColor: COLORS.green,
        height: 1,
        marginBottom: 10,
        width: '100%'
    },
    lessonImage: {
        justifyContent: 'center' ,
        alignItems: 'center',
        overflow: 'hidden',
        width: (Dimensions.get('window').width) - 30,
        borderRadius: 8,
        height: 150
    },  
    lessonTitle: {       
        fontFamily: 'Roboto_700Bold',
        fontSize: 30,
        position: 'relative',
        color: COLORS.white
    }
})
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%'
    },
    title:{
        marginTop: Dimensions.get('window').height / 6, 
        marginBottom: 30
    },
    formContainer:{
        alignItems:'center',
        width:'100%'
    },
    helpPassContainer: {
        flexDirection: 'row'
    },
    helpTextContainer: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0
    },
    textBold: {
        fontWeight: 'bold'
    }
})
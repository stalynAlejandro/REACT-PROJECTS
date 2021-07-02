import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.white
    },
    formContainer:{
        position:'absolute',
        top: Dimensions.get('window').height / 3,
        display:'flex',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    buttonBack: {
        position: 'absolute',
        right: 0,
        top:0,
        marginRight: 12,
        marginTop:42,
    },
})
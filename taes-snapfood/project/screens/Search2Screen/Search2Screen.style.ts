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
    resultImages: {
        top: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    resultImageXL: {
        width: (Dimensions.get('window').width) - 40,
        height: 200,
        borderRadius: 8,
        marginBottom: 8
    },
    resultImage:{
        width: (Dimensions.get('window').width/3) - 20,
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
        marginHorizontal: 5
    }
})
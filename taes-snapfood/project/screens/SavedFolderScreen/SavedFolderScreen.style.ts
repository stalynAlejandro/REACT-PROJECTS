import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'

export default StyleSheet.create({
    titleFolder: {
        textAlign: 'center',
        top: 40,
        fontFamily: 'Roboto_700Bold',
        fontSize: 30,
        color: COLORS.orange,
        marginBottom: 60
    },
    settingsButton: {
        top: 30,
        position: 'absolute',
        right: 10
    }
})
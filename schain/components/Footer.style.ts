import { StyleSheet } from 'react-native-web'
import * as COLORS from '../constants/COLORS'

export default StyleSheet.create({
    newsLetterInput: {
        height: '2.5rem',
        width: '12rem',
        backgroundColor: COLORS.maxBlack,
        borderColor: COLORS.white,
        color: COLORS.white,
        borderRadius: 4,
        borderWidth: 3,
        textContentType: 'emailAddress',
        textAlign: 'center',
        textColor: COLORS.white,
        marginTop: '1rem',
    }
}) 
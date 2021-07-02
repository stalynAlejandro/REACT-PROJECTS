import { StyleSheet, Dimensions } from 'react-native'
import {COLORS} from '../../constants/Colors'
export default StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'flex-end',
        height: 230
    },
    backButton: {
        position: 'absolute',
        paddingTop: 30,
        left: 10,
        alignSelf: 'flex-start',
    },
    settingsButton: {
        position: 'absolute',
        right: 12,
        top: 40
    },
    buttons: {
        marginTop: 10, 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    // ProfileScreen.UI.tsx
    explore: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 3
    },
    img: {
        width: (Dimensions.get('window').width / 3) - 10,
        height: 100,
        marginTop: 10,
        borderRadius: 8,
        marginHorizontal: 4
    },
    modalPosition: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalView: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 20,
        elevation: 5
    },
})
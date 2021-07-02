import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants/Colors'

export default StyleSheet.create({
    // UI
    imageContainer: {
        marginTop: 50,
        width: 350,
        height: 300,
        borderRadius: 8,
        backgroundColor: COLORS.gray,
        alignSelf: 'center',
        marginBottom: 16
    },
    container: {
        marginLeft: '5%'
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    },
    nameInput: {
        height: 40,
        width: 300,
        backgroundColor: COLORS.gray,
        borderRadius: 8,
        paddingLeft: 18
    },
    line: {
        height: 2,
        width: Dimensions.get('window').width,
        backgroundColor: COLORS.dark_gray,
        marginTop: 16,
        marginBottom: 16
    },
    durationContainer: {
        marginLeft: '5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    durationInput: {
        height: 40,
        width: 150,
        backgroundColor: COLORS.gray,
        borderRadius: 8,
        marginHorizontal: 8,
        paddingLeft: 18
    },
    ingredientsTagFormInput: {
        flexDirection: 'row',
        marginBottom: 10
    },
    ingredientsInput: {
        height: 40,
        width: 100,
        backgroundColor: COLORS.gray,
        borderRadius: 8,
        paddingLeft: 18,
        marginRight: 8
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderRadius: 10,
        backgroundColor: COLORS.light_blue
    },
    picker: {
        width: 200
    },
    addButton: {
        marginLeft: 8,
        height: 40,
        width: 100,
        backgroundColor: COLORS.orange,
        borderRadius: 10,
        justifyContent: 'flex-start'
    },
    listIngredientesTags: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labelListText: {
        color: COLORS.dark_gray,
        fontSize: 20
    },
    closeButton: {
        marginRight: '5%'
    },
    procedure: {
        backgroundColor: COLORS.gray,
        borderRadius: 10,
        paddingHorizontal: 18,
        width: '95%',
        minHeight: 100
    },
    tagsInput: {
        width: 180,
        backgroundColor: COLORS.gray,
        borderRadius: 8,
        paddingLeft: 18
    },
    buttonCreateRecipe: {
        alignSelf: 'center',
        width: '80%',
        height: 50,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: COLORS.orange,
        justifyContent: 'center'
    },
    createRecipe: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.white,
        textAlign: 'center'
    },
})
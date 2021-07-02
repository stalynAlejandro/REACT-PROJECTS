import styles from './NewRecipeScreen.style'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'
import { useDispatch } from 'react-redux'
import { IIngredient, IngredientTypes, IRecipe, IUser, ListOfIngredientTypes, ListOfQuantityTypes, QuantityTypes } from '../../constants/Types'
import { createRecipe, showRecipeError } from '../../store/actions/recipeActions'
import { firebaseConfig } from '../../App'
import * as Firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker'
import { COLORS } from '../../constants/Colors'

interface ISelectImageFromDevice {
    recipe: IRecipe,
    setImage: Function
}

export const SelectImageFromDevice = (args: ISelectImageFromDevice) => {
    const selectPhotoFromDevice = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled) {
            return;
        }
        args.setImage({ ...args.recipe, Image: pickerResult })
    }

    return (
        <TouchableOpacity onPress={selectPhotoFromDevice}>
            <Image style={styles.imageContainer} source={(args.recipe.Image) ? { uri: args.recipe.Image.uri } : require('../../assets/images/AddImage.png')} />
        </TouchableOpacity>
    )
}

interface IRecipeForm {
    initRecipe: IRecipe,
    recipe: IRecipe,
    setRecipe: Function,
    user: IUser
}

export const RecipeForm = (args: IRecipeForm) => {

    if (!Firebase.apps.length) Firebase.initalizeApp(firebaseConfig)

    const dispatch = useDispatch()
    const [listIngredients, setListIngredients] = useState<IIngredient[]>([])
    const [listTags, setListTags] = useState<string[]>([])
    const [newTag, setNewTag] = useState<string>('')
    const [numberQuantity, setNumberQuantity] = useState<string>('')
    const [pickerQuantityType, setPickerQuantityType] = useState<QuantityTypes>(QuantityTypes.grams)
    const [pickerIngredient, setPickerIngredient] = useState<IngredientTypes>(IngredientTypes.bread)

    // FUNCTIONS TO SET NAME OF THE RECIPE
    const setNameOfRecipe = (name: string) => args.setRecipe({ ...args.recipe, Name: name })

    // FUNCTIONS TO SET DURATION OF THE RECIPE
    const setDurationOfRecipe = (duration: string) => args.setRecipe({ ...args.recipe, Duration: duration })

    // FUNCTIONS TO ADD/REMOVE INGREDIENTS
    const addIngredient = () => {
        if (numberQuantity === '0' || numberQuantity === '') return;
        const newIngredient: IIngredient = {
            quantity: numberQuantity,
            quantityType: pickerQuantityType,
            ingredient: pickerIngredient
        }
        setListIngredients([...listIngredients, newIngredient])
        setNumberQuantity('')   // Clear the input for quantity
    }

    const removeIngredient = (ingredient: IIngredient) => setListIngredients([...listIngredients.filter(ingr => ingr !== ingredient)])

    // FUNCTION TO ADD PROCESS
    const addProcess = (process: string) => args.setRecipe({ ...args.recipe, Process: process })

    // FUNCTIONS TO ADD/REMOVE TAGS
    const addNewTag = () => {
        if (newTag !== '') setListTags([...listTags, newTag.toLowerCase()])
        setNewTag('')
    }

    const removeTag = (removeTag: string) => setListTags([...listTags.filter(tag => tag !== removeTag)])

    // FUNCTIONS TO CREATE FINAL RECIPE
    const pressCreateRecipe = () => {

        if (args.recipe.Name === '' || args.recipe.Image === undefined || args.recipe.Duration === 0 || listIngredients.length === 0) {
            return dispatch(showRecipeError('Por favor rellena los campos necesarios para crear una receta.'))
        }

        uploadImageAsync().then((resp) => {
            const newRecipe: IRecipe = {
                ...args.recipe,
                ImageURL: resp,
                Ingredients: listIngredients,
                Tags: listTags,
                DateOfCreation: new Date(),
                AuthorEmail:  args.user.Email
            }
            dispatch(createRecipe(newRecipe, args.user))
            clearRecipeForm()
        }).catch(error => {
            dispatch(showRecipeError('Ha ocurrido un error en el servidor. Por favor prueba en unos minutos.'))
        })
    }

    // FUNCTION TO UPLOAD THE IMAGE TO FIREBASE
    async function uploadImageAsync() {

        const blob: Blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.error("ERROR", e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', args.recipe.Image?.uri, true);
            xhr.send(null);
        });

        const ref = Firebase.storage().ref().child('img_' + args.recipe.Name.trim() + '_' + args.recipe.AuthorEmail)
        const snapshot = await ref.put(blob);

        return snapshot.ref.getDownloadURL();
    }

    const clearRecipeForm = () => {
        args.setRecipe(args.initRecipe)
        setListTags([])
        setListIngredients([])
    }

    return (
        <View>

            {/* SET NAME OF THE RECIPE */}
            <View style={styles.container}>
                <Text style={styles.labelText}>Nombre de la receta:</Text>
                <TextInput style={styles.nameInput} value={args.recipe.Name} onChangeText={text => setNameOfRecipe(text)} />
            </View>
            <View style={styles.line}></View>

            {/* SET DURATION */}
            <View style={styles.durationContainer}>
                <Text style={styles.labelText}>Duración:</Text>
                <TextInput style={styles.durationInput} keyboardType="numeric" onChangeText={text => setDurationOfRecipe(text)} />
                <Text style={styles.labelText}>min</Text>
            </View>
            <View style={styles.line}></View>

            {/* SET ARRAY OF INGREDIENTS */}
            <View style={styles.container}>
                <Text style={styles.labelText}>Ingredientes:</Text>
                <View style={styles.ingredientsTagFormInput}>
                    <TextInput
                        style={styles.ingredientsInput}
                        placeholder={"Cantidad"}
                        keyboardType={'numeric'}
                        value={numberQuantity}
                        onChangeText={(text) => setNumberQuantity(text)} />
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={pickerQuantityType}
                            style={styles.picker}
                            onValueChange={(itemValue: any, itemIndex) => setPickerQuantityType(itemValue)}>
                            {ListOfQuantityTypes.map((quantity, index) => (
                                <Picker.Item label={quantity} value={quantity} key={index} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={styles.ingredientsTagFormInput}>
                    <View style={styles.pickerContainer} >
                        <Picker
                            selectedValue={pickerIngredient}
                            style={styles.picker}
                            onValueChange={(itemValue: any, itemIndex) => setPickerIngredient(itemValue)}>
                            {ListOfIngredientTypes.sort((a,b) => (a > b ? 1 : a < b? -1 : 0)).map((ingredient, index) => (
                                <Picker.Item label={ingredient} value={ingredient} key={index} />
                            ))}
                        </Picker>
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={addIngredient}>
                        <Icon type={'ionicon'} size={40} name={'add-outline'} color={COLORS.dark_gray} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* LIST OF INGREDIENTS */}
            <View style={styles.container}>
                {listIngredients.map((ingredient, index) => (
                    <View key={index} style={styles.listIngredientesTags}>
                        <Text style={styles.labelListText}>{ingredient.quantity} {ingredient.quantityType} de {ingredient.ingredient}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => removeIngredient(ingredient)}>
                            <Icon style={{justifyContent: 'flex-end'}} type={'ionicon'} size={30} name={'close-outline'} color={COLORS.red} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <View style={styles.line}></View>

            {/* SET PROCCEDURE */}
            <View style={styles.container}>
                <Text style={styles.labelText}>Procedimiento:</Text>
                <TextInput value={args.recipe.Process} onChangeText={text => addProcess(text)} style={styles.procedure} multiline={true} />
            </View>
            <View style={styles.line}></View>

            {/* TAGS */}
            <View style={styles.container}>
                <Text style={styles.labelText}>Tags:</Text>
                <View style={styles.ingredientsTagFormInput}>
                    <TextInput placeholder={"ej. vegano, sano, fit..."} value={newTag} style={styles.tagsInput} onChangeText={text => setNewTag(text)} />
                    <TouchableOpacity style={styles.addButton} onPress={() => addNewTag()}>
                        <Icon type={'ionicon'} size={40} name={'add-outline'} color={COLORS.dark_gray} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* LIST OF TAGS */}
            <View style={styles.container}>
                {listTags.map((tag, index) => (
                    <View key={index} style={styles.listIngredientesTags}>
                        <Text style={styles.labelListText}>{tag}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => removeTag(tag)}>
                            <Icon style={{justifyContent: 'flex-end'}} type={'ionicon'} size={30} name={'close-outline'} color={COLORS.red} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <View style={styles.line}></View>

            {/* BUTTON CREATE RECIPE */}
            <TouchableOpacity style={styles.buttonCreateRecipe} onPress={pressCreateRecipe}>
                <Text style={styles.createRecipe}>Crear Receta</Text>
            </TouchableOpacity>
        </View>
    )
}
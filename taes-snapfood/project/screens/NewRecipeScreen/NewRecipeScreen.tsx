import { SelectImageFromDevice, RecipeForm } from './NewRecipeScreen.UI'
import React, { useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { IRecipeState } from '../../store/reducers/recipeReducer'
import { clearRecipeError, clearRecipeSuccess } from '../../store/actions/recipeActions'
import { IRecipe, IUser } from '../../constants/Types'
import { Dialog } from '../../components'

const initRecipe: IRecipe = {
    AuthorEmail: '',
    Name: '',
    Image: '',
    ImageURL: '',
    Duration: 0,
    Ingredients: [],
    Process: '',
    Tags: [],
    DateOfCreation: new Date(),
    Stars: 0
}

function NewRecipeScreen() {
    const dispatch = useDispatch()
    const userProfileState = useSelector((state: any) => state.firebase.profile) as IUser
    const recipeState = useSelector((state: any) => state.recipe) as IRecipeState
    const [newRecipe, setNewRecipe] = useState<IRecipe>( { ...initRecipe, AuthorEmail: userProfileState.Email })
    
    return (
        <View>
            <ScrollView>
                <SelectImageFromDevice recipe={newRecipe} setImage={setNewRecipe} />
                <RecipeForm user={userProfileState} initRecipe={initRecipe} recipe={newRecipe} setRecipe={setNewRecipe} />
            </ScrollView>
            {(recipeState.recipeError) &&
                <Dialog message={recipeState.recipeError}
                    buttonTitle={"Aceptar"}
                    pressButton={() => dispatch(clearRecipeError())}/>
            }
            {(recipeState.isCreateRecipeSuccessful) &&
                <Dialog message={'¡Enhorabuena! Se ha creado correctamente tu receta. Puedes crear otra si lo deseas.'}
                    buttonTitle={"Aceptar"}
                    pressButton={() => dispatch(clearRecipeSuccess())}/>
            }
        </View>
    )
}

export { NewRecipeScreen }
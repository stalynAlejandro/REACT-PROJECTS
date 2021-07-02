export interface IRecipeState {
  recipeError: string | undefined,
  isCreateRecipeSuccessful: boolean | undefined,
  isCreateFolderSuccessful: boolean | undefined
}
const initState: IRecipeState = {
  recipeError: undefined,
  isCreateRecipeSuccessful: undefined,
  isCreateFolderSuccessful: undefined
}

const recipeReducer = (state = initState, action: any): IRecipeState => {

  switch (action.type) {

    case 'CREATE_RECIPE_SUCCESS': return { ...state, isCreateRecipeSuccessful: true }

    case 'CREATE_FOLDER_SUCCESS': return { ...state, isCreateFolderSuccessful: true }

    case 'CLEAR_FOLDER_SUCCESS': return { ...state, isCreateFolderSuccessful: undefined}

    case 'CLEAR_RECIPE_SUCCESS': return { ...state, isCreateRecipeSuccessful: undefined }

    case 'SHOW_RECIPE_ERROR': return { ...state, recipeError: action.payload }

    case 'CLEAR_RECIPE_ERROR': return { ...state, recipeError: undefined }

    default: return state;
  }
};

export default recipeReducer;
import authReducer, { IAuthState } from './authReducer'
import recipeReducer, { IRecipeState } from './recipeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

interface AppState {
  auth: IAuthState,
  recipe: IRecipeState,
  firestore: any,
  firebase: any
}

const rootReducer = combineReducers<AppState>({
  auth: authReducer,
  recipe: recipeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
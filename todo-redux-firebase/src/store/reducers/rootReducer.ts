import { authReducer } from './authReducer'
import { projectReducer } from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

export const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
})

export type RootState = ReturnType<typeof rootReducer>


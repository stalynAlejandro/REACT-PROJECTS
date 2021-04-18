import { authReducer } from './authReducer'
import { projectReducer } from './projectReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export type RootState = ReturnType<typeof rootReducer>


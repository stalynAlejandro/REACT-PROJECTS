import { Dispatch } from 'react'
import { IProject } from '../reducers/projectReducer'

export const projectActions = {
    CREATE_PROJECT: 'CREATE_PROJECT'
}

export const createProject = (project: IProject) => {
    return (dispatch: Dispatch<any>, getState: any, { getFirebase, getFirestore }: { getFirebase: any, getFirestore: any }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Neet',
            authorLastName: 'ninja',
            auhtorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((error: any) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })
    }
}
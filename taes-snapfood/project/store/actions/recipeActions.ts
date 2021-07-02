import { Dispatch } from "react";
import { IRecipe, IUser, IFolder } from "../../constants/Types";

const newFolder: IFolder = {
    Title: '',
    Recipes: []
}

export const editFolderName = (name: string, folder: IFolder, author: IUser) => {
    return (dispatch: Dispatch<any>,getState: any, { getFirebase, getFirestore }: any) =>
    {
        const updatedFolder: IFolder ={
            Title: name,
            Recipes: [...folder.Recipes]
        }
        const retrieveFolders = author.Folders.filter(f => f.Title !== folder.Title)
        const firestore = getFirestore();
        // ADD RECIPE TO USERS COLLECTION
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).set({

                        ...author,
                        Folders: [
                            ...retrieveFolders,
                            updatedFolder,
                        ]                        
                    })
                })

            }).catch(() => {
                console.log("Hubo un problema editando la carpeta") 
            })
    }
}

export const deleteFolder = (folder: IFolder, author: IUser) => {
    return (dispatch: Dispatch<any>,getState: any, { getFirebase, getFirestore }: any) =>
    {
        const firestore = getFirestore();
        const retrieveFolder= author.Folders.filter(f => (f.Title !== folder.Title))
        // ADD RECIPE TO USERS COLLECTION
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).update({
                        ...author,
                        Folders: [
                            ...retrieveFolder
                        ]    
                    })
                })
            }).catch(() => {
                console.log("Hubo un problema borrando la receta") 
            })
    }
}

export const addToFolder = (recipe: IRecipe, author: IUser, folder: IFolder) => {
    return (dispatch: Dispatch<any>,getState: any, { getFirebase, getFirestore }: any) =>
    {
        const updatedFolder: IFolder ={
            Title: folder.Title,
            Recipes: [...folder.Recipes, recipe ]
        }
        const retriveFolders = author.Folders.filter(f => f.Title !== folder.Title)
        const firestore = getFirestore();
        // ADD RECIPE TO USERS COLLECTION
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).set({

                        ...author,
                        Folders: [
                            ...retriveFolders,
                            updatedFolder,
                        ]                        
                    })
                })

            }).catch(() => {
                console.log("Hubo un problema guardando la receta") 
            })
    }
}

export const removeFromFolder = (recipe: IRecipe, author: IUser, folder: IFolder) => {
    return (dispatch: Dispatch<any>,getState: any, { getFirebase, getFirestore }: any) =>
    {
        const firestore = getFirestore();
        const retriveFolder= author.Folders.filter(f => (f.Title !== folder.Title))
        const retriveRecipes= folder.Recipes.filter(f => (f.AuthorEmail !== recipe.AuthorEmail && f.Name !== recipe.Name))
        const updatedFolder: IFolder ={
            Title: folder.Title,
            Recipes: [...retriveRecipes ]
        }
        // ADD RECIPE TO USERS COLLECTION
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).update({
                        ...author,
                        Folders: [
                            ...retriveFolder, updatedFolder
                        ]    
                    })
                })
            }).catch(() => {
                console.log("Hubo un problema guardando la receta") 
            })
    }
}

export const addToFavs = (recipe: IRecipe, author: IUser) => {
    return (dispatch: Dispatch<any>,getState: any, { getFirebase, getFirestore }: any) =>
    {
        const firestore = getFirestore();
        // ADD RECIPE TO USERS COLLECTION
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).set({
                        ...author,
                        RecipesLiked: [...author.RecipesLiked, recipe]
                    })
                })

            }).catch(() => {
                console.log("Hubo un problema guardando la receta")    
            })
    }
}

export const removeFromFavs = (recipe: IRecipe, author: IUser) => {
    return (dispatch: Dispatch<any>,getState: any, { getFirebase, getFirestore }: any) =>
    {
        const firestore = getFirestore();
        const retriveRecipe= author.RecipesLiked.filter(f => (f.Name !== recipe.Name))
        // REMOVE RECIPE FROM USERS COLLECTION
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).set({
                        ...author,
                        RecipesLiked: [...retriveRecipe]
                    })
                    //where("RecipesLiked", "array-contains", {id: recipe.ID, Name: recipe.Name})
                })
            }).catch(() => {
                console.log("Hubo un problema borrando la receta")    
            })
    }
}

export const createFolder = (title: string, author: IUser) => { 
    return (dispatch: Dispatch<any>,getState: any, { getFirebase, getFirestore }: any) => {
        newFolder.Title=title;
        const firestore = getFirestore();
        // ADD RECIPE TO USERS COLLECTION
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).set({
                        ...author,
                        Folders: [...author.Folders, newFolder]
                    })
                })

            }).then(()=>{
                dispatch(createFolderSuccess('La carpeta ha sido creada correctamente')); 
            }).catch(() => {
                dispatch(showRecipeError('Ha ocurrido un error en el servidor. Prueba de nuevo dentro de unos minutos'));
            })
    }
}
export const createRecipe = (recipe: IRecipe, user: IUser) => {
    return (dispatch: Dispatch<any>, getState: any, { getFirebase, getFirestore }: any) => {
        const firestore = getFirestore();

        // ADD RECIPE TO USERS COLLECTION
        firestore.collection('users').where('Email', '==', user.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).set({
                        ...user,
                        RecipesCreated: [...user.RecipesCreated, recipe]
                    })
                })
            }).catch((error: any) => {
                dispatch(showRecipeError('Ha ocurrido un error en el servidor. Prueba de nuevo dentro de unos minutos'));
            })

        // ADD RECIPE TO THE GENERAL RECIPES COLLECTION
        firestore.collection('recipes').add({
            ...recipe
        }).then(() => {
            dispatch(createRecipeSuccess('La receta ha sido creada correctamente'));
        }).catch(() => {
            dispatch(showRecipeError('Ha ocurrido un error en el servidor. Prueba de nuevo dentro de unos minutos'));
        });
    }
};
export const createRecipeSuccess = (message: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: 'CREATE_RECIPE_SUCCESS', payload: message })
    }
}

export const createFolderSuccess = (message: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: 'CREATE_FOLDER_SUCCESS', payload: message })
    }
}

export const showRecipeError = (message: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: 'SHOW_RECIPE_ERROR', payload: message })
    }
}

export const clearRecipeError = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: 'CLEAR_RECIPE_ERROR' })
    }
}

export const clearRecipeSuccess = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: 'CLEAR_RECIPE_SUCCESS' })
    }
}

export const clearFolderSuccess = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: 'CLEAR_FOLDER_SUCCESS' })
    }
}


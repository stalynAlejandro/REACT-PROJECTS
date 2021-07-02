import { Dispatch } from "react";
import { IUser } from "../../constants/Types";

export const followUser = (email: string, author: IUser) => {
    return (dispatch: Dispatch<any>,getState: any, { getFirestore }: any) => {
        const firestore = getFirestore();
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).update({
                        ...author,
                        Follows: [...author.Follows, email]
                    })
                })

            }).catch(() => {
                (dispatch: Dispatch<any>) => { dispatch({ type: 'Ha ocurrido un error en el servidor. Prueba de nuevo dentro de unos minutos'})}
            })
    }
}

export const unfollowUser = (email: string, author: IUser) => {
    return (dispatch: Dispatch<any>, getState: any, { getFirestore }: any) => {
        const firestore = getFirestore();
        const unfollowUser = author.Follows.filter(user => user!==email)
        firestore.collection('users').where('Email', '==', author.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).update({
                        ...author,
                        Follows: [...unfollowUser]
                    })
                })

            }).catch(() => {
                (dispatch: Dispatch<any>) => { dispatch({ type: 'Ha ocurrido un error en el servidor. Prueba de nuevo dentro de unos minutos'})}
            })
    }
}

export const addToFollowers = (emailToAdd: string, UserToFollow: IUser) => {
    return (dispatch: Dispatch<any>, getState: any, { getFirestore }: any) => {
        console.log(UserToFollow)
        const firestore = getFirestore();
        firestore.collection('users').where('Email', '==', UserToFollow.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).update({
                        ...UserToFollow,
                        Followers: [...UserToFollow.Followers, emailToAdd]
                    })
                })
            }).catch(() => {
                (dispatch: Dispatch<any>) => { dispatch({ type: 'Ha ocurrido un error en el servidor. Prueba de nuevo dentro de unos minutos'})}
            })
    }
}
export const removeUserFromFollowers = (emailToRemove: string, user: IUser) => {
    return (dispatch: Dispatch<any>, getState: any, { getFirestore }: any) => {
        const firestore = getFirestore();
        const unfollowUser = user.Followers.filter(user => user!==emailToRemove)
        firestore.collection('users').where('Email', '==', user.Email).get()
            .then((querySnapshot: any) => {
                querySnapshot.forEach((documentSnapshot: any) => {
                    firestore.collection('users').doc(documentSnapshot.id).update({
                        ...user,
                        Followers: [...unfollowUser]
                    })
                })

            }).catch(() => {
                (dispatch: Dispatch<any>) => { dispatch({ type: 'Ha ocurrido un error en el servidor. Prueba de nuevo dentro de unos minutos'})}
            })
    }
}
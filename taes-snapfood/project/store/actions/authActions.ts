import { Dispatch } from "react";
import { NavigationEvents } from "react-navigation";
import { IUser } from "../../constants/Types";

export const LogIn = ({
  email,
  password,
  clear,
  navigate,
}: {
  email: string;
  password: string;
  clear: any;
  navigate: any;
}) => {
  return (dispatch: Dispatch<any>, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
        clear();
        navigate();
      })
      .catch((error: any) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == "auth/invalid-email") {
          dispatch(showAuthError("El email no es válido."));
        } else if (errorCode == "auth/user-disabled") {
          dispatch(
            showAuthError(
              "El usuario ha sido deshabilitado. Póngase en contacto con el servicio técnico."
            )
          );
        } else if (errorCode == "auth/user-not-found") {
          dispatch(showAuthError("El email no pertenece a ningún usuario."));
        } else if (errorCode == "auth/wrong-password") {
          dispatch(showAuthError("La contraseña es incorrecta."));
        } else {
          dispatch(showAuthError(errorMessage));
        }
      });
  };
};

interface ISignUp {
  password: string;
  newUser: IUser;
}

export const SignUp = (args: ISignUp) => {
  return (
    dispatch: Dispatch<any>,
    getState: any,
    { getFirebase, getFirestore }: any
  ) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(args.newUser.Email, args.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            ...args.newUser,
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((error: any) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/weak-password") {
          dispatch(
            showAuthError(
              "La contraseña es demasiado débil. Debe tener min. 6 carácteres."
            )
          );
        } else if (errorCode === "auth/invalid-email") {
          dispatch(showAuthError("El email no es válido."));
        } else if (errorCode === "auth/email-already-in-use") {
          dispatch(showAuthError("El email ya está en uso."));
        } else {
          dispatch(showAuthError(errorMessage));
        }
      });
  };
};

export const SignOut = (navigate: Function) => {
  return (dispatch: Dispatch<any>, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .then(() => {
        navigate();
      });
  };
};

export const UpdateUser = (updatedUser: IUser) => {
  return (
    dispatch: Dispatch<any>,
    getState: any,
    { getFirebase, getFirestore }: any
  ) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .where("Email", "==", updatedUser.Email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          firestore
            .collection("users")
            .doc(documentSnapshot.id)
            .set({
              ...updatedUser,
            });
        });
      })
      .then(() => {
        dispatch({ type: "UPDATE_PROFILE_SUCCESSFUL" });
      })
      .catch(() => {
        dispatch(
          showAuthError(
            "Ha ocurrido un error en el servidor. Prueba de nuevo dentro de unos minutos"
          )
        );
      });
  };
};

export const showAuthError = (message: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SHOW_AUTH_ERROR", payload: message });
  };
};

export const clearAuthError = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  };
};

export const clearSignUp = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "CLEAR_SIGNUP" });
  };
};

export const clearProfileSuccessful = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "CLEAR_PROFILE" });
  };
};

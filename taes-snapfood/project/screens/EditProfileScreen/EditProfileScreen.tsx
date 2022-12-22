import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { SelectImageFromDevice, ProfileForm } from "./EditProfile.UI";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../constants/Types";
import {
  clearAuthError,
  clearProfileSuccessful,
  showAuthError,
  UpdateUser,
} from "../../store/actions/authActions";
import * as Firebase from "firebase";
import { firebaseConfig } from "../../App";
import { Dialog } from "../../components";
import styles from "./EditProfileScreen.style";
import { IAuthState } from "../../store/reducers/authReducer";
import { Icon } from "react-native-elements";

function EditProfileScreen() {
  if (!Firebase.apps.length) Firebase.initalizeApp(firebaseConfig);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth) as IAuthState;
  const userLoggedIn = useSelector((state) => state.firebase.profile) as IUser;

  const [editProfile, setEditProfile] = useState<IUser>({ ...userLoggedIn });
  console.log("USER STATE ", userLoggedIn);

  useEffect(() => {
    //navigation.setOptions({tabBarVisible:false});
    setEditProfile({ ...userLoggedIn });
  }, [authState]);

  const saveEditProfile = () => {
    uploadImageAsync()
      .then((resp) => {
        dispatch(UpdateUser({ ...editProfile, ProfileImageUrl: resp }));
      })
      .catch((error) => {
        dispatch(
          showAuthError(
            "Ha ocurrido un error en el servidor. Por favor prueba en unos minutos."
          )
        );
      });
  };

  // FUNCTION TO UPLOAD THE PROFILE IMAGE TO FIREBASE
  async function uploadImageAsync() {
    const blob: Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.error("ERROR", e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      if (editProfile.ProfileImage)
        xhr.open("GET", editProfile.ProfileImage.uri, true);
      xhr.send(null);
    });

    const ref = Firebase.storage()
      .ref()
      .child("imgProfile_" + editProfile.Email.trim());
    const snapshot = await ref.put(blob);

    return snapshot.ref.getDownloadURL();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}
      >
        <Icon type={"ionicon"} name={"close-outline"} size={35} color="black" />
      </TouchableOpacity>
      <SelectImageFromDevice user={editProfile} setImage={setEditProfile} />
      <ProfileForm
        user={editProfile}
        editUser={setEditProfile}
        saveUser={saveEditProfile}
      />

      {/* Check Auth Reducer Sucess/Errors */}
      {authState.authError && (
        <Dialog
          message={authState.authError}
          buttonTitle={"Aceptar"}
          pressButton={() => dispatch(clearAuthError())}
        />
      )}

      {authState.isUpdateProfileSuccessful && (
        <Dialog
          message={"¡Enhorabuena! Se ha actualizado correctamente tu perfil."}
          buttonTitle={"Aceptar"}
          pressButton={() => {
            dispatch(clearProfileSuccessful()), navigation.goBack();
          }}
        />
      )}
    </View>
  );
}
export { EditProfileScreen };


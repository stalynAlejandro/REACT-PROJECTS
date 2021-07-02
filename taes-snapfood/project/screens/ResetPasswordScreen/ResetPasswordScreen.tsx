import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import {
  ButtonBack,
  ButtonMain,
  TitleMain,
  TextInputMain,
  TextReset,
  Subtitle,
} from "../../components";
import styles from "./ResetPasswordScreen.style";
import { Icon } from "react-native-elements";

export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const firebase = require("firebase");

  const forgotPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        Alert.alert("Email enviado!", "Revisa tu correo de entrada.");
      })
      .catch(function (e) {
        Alert.alert(
          "Oops!",
          "Tu email no consta en nuestra base de datos. Prueba con otro."
        );
      });
  };

  const pressSend = () => forgotPassword();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}
      >
        <Icon type={"ionicon"} name={"close-outline"} size={35} color="black" />
      </TouchableOpacity>

      <TextReset title={"Recupera tu cuenta"} />
      <Subtitle
        title={"Introduce el correo electrónico asociado a tu cuenta"}
      />
      <View style={styles.formContainer}>
        <TextInputMain
          placeHolder={"Email"}
          value={email}
          setValue={setEmail}
          password={false}
        />
        <ButtonMain title={"Enviar"} action={pressSend} />
      </View>
    </View>
  );
}

export { ResetPasswordScreen };

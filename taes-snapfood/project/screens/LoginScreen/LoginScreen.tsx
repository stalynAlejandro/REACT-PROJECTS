import styles from './LoginScreen.style'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { clearAuthError, LogIn, showAuthError } from '../../store/actions/authActions'
import { IAuthState } from '../../store/reducers/authReducer';
import { ButtonMain, TitleMain, TextInputMain, Dialog } from '../../components'

function LoginScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const authState = useSelector((state: any) => state.auth) as IAuthState

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const clearForm = () => {
        setEmail('')
        setPassword('')
    }

    const pressLogIn = () => {
        if (!email || !password) return dispatch(showAuthError("Por favor introduce todos los datos."))
        dispatch(LogIn({ email: email, password: password, clear: () => clearForm(), navigate: () => navigation.navigate('Root') }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TitleMain title={"SnapFood"} />
            </View>
            <View style={styles.formContainer}>
                <TextInputMain placeHolder={"Email"} value={email} setValue={setEmail} password={false} />
                <TextInputMain placeHolder={"Contraseña"} value={password} setValue={setPassword} password={true} />
                <ButtonMain title={"Iniciar sesión"} action={pressLogIn} />

                {/* Forget Password? Go to ResetPassword.*/}
                <View style={styles.helpPassContainer}>
                    <Text>¿Has olvidado tu contraseña?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')} >
                        <Text style={styles.textBold}> Obtén ayuda.</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Don't have an account. Go to Register. */}
            <View style={ styles.helpTextContainer }>
                <Text>¿No tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                    <Text style={styles.textBold}> Regístrate</Text>
                </TouchableOpacity>
            </View>

            {/* Check Auth Reducer Sucess/Errors */}
            {(authState.authError) &&
                <Dialog message={authState.authError}
                    buttonTitle={"Aceptar"}
                    pressButton={() => dispatch(clearAuthError())}/>
            }
        </View>
    )
}

export { LoginScreen }
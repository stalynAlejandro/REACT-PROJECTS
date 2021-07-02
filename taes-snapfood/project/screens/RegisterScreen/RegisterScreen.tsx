import styles from './RegisterScreenStyle'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { SignUp, showAuthError, clearAuthError, clearSignUp } from '../../store/actions/authActions'
import { IAuthState } from '../../store/reducers/authReducer'
import { ButtonMain, TitleMain, TextInputMain, Dialog } from '../../components'

function RegisterScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const authState = useSelector((state: any) => state.auth) as IAuthState

    const [userName, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const pressRegister = () => {
        if (!userName || !email || !password || !confirmPassword) return dispatch(showAuthError("Por favor introduce todos los datos."))
        if (password !== confirmPassword) return dispatch(showAuthError('Las contraseñas no coinciden.'))
        dispatch(SignUp({
            password: password,
            newUser: {
                Email: email,
                ProfileImage: '',
                ProfileImageUrl: '',
                Name: userName,
                About: '',
                RecipesCreated: [],
                RecipesLiked: [],
                Folders: [],
                Follows: [],
                Followers: []
            }
        }))
    }

    const clearForm = () => {
        setUserName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TitleMain title={"SnapFood"} />
            </View>
            <View style={styles.formContainer}>
                <TextInputMain placeHolder={"Nombre de usuario"} value={userName} setValue={setUserName} password={false} />
                <TextInputMain placeHolder={"Email"} value={email} setValue={setEmail} password={false} />
                <TextInputMain placeHolder={"Contraseña"} value={password} setValue={setPassword} password={true} />
                <TextInputMain placeHolder={"Confirmar contraseña"} value={confirmPassword} setValue={setConfirmPassword} password={true} />
                <ButtonMain title={"Registrarme"} action={pressRegister} />
            </View>

            {/* Already have account. Go To Login*/}
            <View style={styles.helpTextContainer}>
                <Text>¿Ya tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.textBold}> Inicia Sesión</Text>
                </TouchableOpacity>
            </View>

            {/* Check Auth Reducer Sucess/Errors */}
            {(authState.authError) &&
                <Dialog message={authState.authError}
                    buttonTitle={"Aceptar"}
                    pressButton={() => dispatch(clearAuthError())}/>
            }

            {/* Register went succesfully, Welcome to The App */}
            {(authState.isSignUpSuccessful) &&
                <Dialog message={'¡Enhorabuena! Te has registrado correctamente.'} 
                    buttonTitle={"Entrar"}
                    pressButton={() => { clearForm(), navigation.navigate('Root'), dispatch(clearSignUp())}}/>
            }
        </View>
    )
}

export { RegisterScreen }
export interface IAuthState {
    authError: string | undefined,
    isSignUpSuccessful: boolean | undefined,
    isLoginSuccessful: boolean | undefined,
    isLoginOutSuccessful: boolean | undefined,
    isUpdateProfileSuccessful: boolean | undefined
}

const initState: IAuthState = {
    authError: undefined,
    isSignUpSuccessful: undefined,
    isLoginSuccessful: undefined,
    isLoginOutSuccessful: undefined,
    isUpdateProfileSuccessful: undefined
}

const authReducer = (state = initState, action: any): IAuthState => {

    switch (action.type) {

        case 'LOGIN_SUCCESS': return { ...state }

        case 'SIGNOUT_SUCCESS': return { ...state }

        case 'UPDATE_PROFILE_SUCCESSFUL': return { ...state, isUpdateProfileSuccessful: true }

        case 'CLEAR_PROFILE': return { ...state, isUpdateProfileSuccessful: undefined }

        case 'SIGNUP_SUCCESS': return { ...state, isSignUpSuccessful: true }

        case 'CLEAR_SIGNUP': return { ...state, isSignUpSuccessful: undefined }

        case 'SHOW_AUTH_ERROR': return { ...state, authError: action.payload }

        case 'CLEAR_AUTH_ERROR': return { ...state, authError: undefined }

        default: return { ...state }
    }
};

export default authReducer;
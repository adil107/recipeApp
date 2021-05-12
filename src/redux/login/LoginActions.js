import { createNotification } from "../../common/Notification"
import * as LoginConst from "./LoginConstant"


export const loginLoading = () => {
    return {
        type: LoginConst.LOGIN
    }
}

export const loginSuccess = () => {
    console.log("loginSuccess called")
    return {
        type: LoginConst.LOGIN_SUCCESS
    }
}

export const loginFail = () => {
    return {
        type: LoginConst.LOGIN_FAIL
    }
}
///LOGOUT Action
export const logOutSuccess = () => {
    return {
        type: LoginConst.LOGOUT_SUCCESS
    }
}


///Google Action
export const loginSocialSuccess = () => {
    return {
        type: LoginConst.SOCIAL_LOGIN_SUCCESS,
    }
}

export const loginAction = (signUpData, loginData) => {
    return (dispatch) => {
        dispatch(loginLoading())
        setTimeout(() => {
            signUpData = signUpData.filter(ele => (ele.email === loginData.email && ele.passWord === loginData.passWord))
            if (signUpData.length) {
                localStorage.setItem("access_token", JSON.stringify(Math.random()))
                dispatch(loginSuccess())
                createNotification("success", "Success", "Successfully Login ")

            }
            else {
                dispatch(loginFail())
                createNotification("error", "Error", "Invalid Email or Password ")
            }

        }, 3000);
    }
}

export const logOutAction = () => {
    return (dispatch) => {
        dispatch(loginLoading())
        setTimeout(() => {
            localStorage.removeItem("access_token")
            dispatch(logOutSuccess())
            createNotification("success", "Logout", "Successfully Logout ")
        }, 3000);
    }
}

///Google Login Action
export const LoginWithSocial = (token) => {
    return (dispatch) => {
        dispatch(loginSocialSuccess())
        localStorage.setItem("access_token", JSON.stringify(token))
        createNotification("success", "Success", "Successfully Login ")

    }
}

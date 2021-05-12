import * as LoginConst from "./LoginConstant"

const initState = {
    login_Loading: false,
    isAuthenticate: false,
}

export const loginReducer = (state = initState, action) => {
    const { type } = action
    switch (type) {
        case LoginConst.LOGIN: return {
            ...state,
            login_Loading: true
        };

        case LoginConst.LOGIN_FAIL: return {
            ...state,
            isAuthenticate: false,
            login_Loading: false
        };
        case LoginConst.LOGIN_SUCCESS: return {
            ...state,
            isAuthenticate: true,
            login_Loading: false
        };

        // LOGOUT_SUCCESS
        case LoginConst.LOGOUT_SUCCESS: return {
            ...state,
            isAuthenticate: false,
            login_Loading: false
        };
        //SOCIAL_LOGIN_SUCCESS
        case LoginConst.SOCIAL_LOGIN_SUCCESS: return {
            ...state,
            isAuthenticate: true,
        };
        default: return state

    }

}
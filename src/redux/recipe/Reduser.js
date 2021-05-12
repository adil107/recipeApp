import { FETCH_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from "./Constant"
// import actions from ""

const initState = {
    isLoading: false,
    data: [],
    // objData: {}
}

export const recipeReduser = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_DATA: return {
            ...state,
            isLoading: true,
        }
        case FETCH_DATA_SUCCESS: return {
            ...state,
            isLoading: false,
            data: [...payload]
        }

        case FETCH_DATA_FAIL: return {
            ...state,
            isLoading: false
        }

        default: return state;
    }
}


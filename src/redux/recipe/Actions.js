import axios from "axios"
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from "./Constant"

const Api_Id = "e57f5834"
const Api_key = "cfd0b0ba4c58d7d961a5169a38ae6a79"

const FetcData = () => {
    return {
        type: FETCH_DATA,
    }
};

const FetcDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
};

const FetcDataFail = () => {
    return {
        type: FETCH_DATA_FAIL,
    }
};

export const dataFetchingAction = (value) => {
    return async (dispatch) => {
        dispatch(FetcData())
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${value}&app_id=${Api_Id}&app_key=${Api_key}`)
            // console.log(res.data.hits);
            dispatch(FetcDataSuccess(res.data.hits))
        } catch (error) {
            console.log(error)
            dispatch(FetcDataFail())

        }
    }

}

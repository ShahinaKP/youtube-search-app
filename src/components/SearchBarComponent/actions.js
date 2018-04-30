import axios from 'axios';
import * as appConst from '../../config/appContants'
import * as types from './constants';

export function listSearchResult(params) {
    return (dispatch) => {
        axios.get(appConst.API_URL + params)
            .then((response) => {
                dispatch({ type: types.LIST_SEARCH_SUCCESS, payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: types.LIST_SEARCH_FAILURE, payload: err, list: 'Shahina' })
            })
    }
}

export function listSearchFailure() {
    return {
        type: types.LIST_SEARCH_FAILURE,
    };
}

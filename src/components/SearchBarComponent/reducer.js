import * as types from './constants';

const initialState = {
    searchList: {}
};

const SearchListReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.LIST_SEARCH_SUCCESS:
        return {
            ...state,
            searchList: action.payload,
        };

    case types.LIST_SEARCH_FAILURE:
        return {
            ...state,
            searchList: {}
        };

    default:
        return state;
    }
};

export default SearchListReducer;

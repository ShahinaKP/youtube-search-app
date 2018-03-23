import * as types from './constants';

const initialState = {
    metaData: {}
};

const VideoMetaReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.VIDEO_META_SUCCESS:
        return {
            ...state,
            metaData: action.medaData
        };

    case types.VIDEO_META_FAILURE:
        return {
            ...state,
            metaData: {}
        };

    default:
        return state;
    }
};

export default VideoMetaReducer;

import * as types from './constants';

export function getVideoData(params) {
    return {
        type: types.VIDEO_META_SUCCESS,
        medaData: params
    }
}

export function getVideoDataFailure() {
    return {
        type: types.VIDEO_META_FAILURE
    }
}

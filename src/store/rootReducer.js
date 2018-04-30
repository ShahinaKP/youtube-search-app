import { combineReducers } from 'redux';

import SearchListReducer from '../components/SearchBarComponent/reducer';
import VideoMetaReducer from '../components/ResultsComponent/reducer'

export default combineReducers({ SearchListReducer, VideoMetaReducer })

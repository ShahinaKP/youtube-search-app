import React from 'react';

import { Provider } from 'react-redux'
import createStore from './middleware';

import YoutubeSearchScreen from '../scenes/YoutubeSearchScreen';

const store = createStore();
export default function Root() {
    return (
        <Provider store={store}>
            <YoutubeSearchScreen />
        </Provider>
    )
}


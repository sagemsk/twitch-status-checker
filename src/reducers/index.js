import { combineReducers } from 'redux';

import streamers from './streamerReducer';

const rootReducer = combineReducers({
  streamers
});

export default rootReducer;

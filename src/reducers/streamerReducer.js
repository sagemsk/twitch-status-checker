import { FETCH_STREAMER } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_STREAMER:
      return [ action.payload.data, ...state ];

    default:
      return state;
  }
}
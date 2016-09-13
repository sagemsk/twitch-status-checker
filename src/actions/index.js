import axios from 'axios';

const apiUrl = 'https://api.twitch.tv/kraken/channels/';

export const FETCH_STREAMER = 'FETCH_STREAMER';

export function fetchStreamer(name) {
  const url = apiUrl + name;
  const request = axios.get(url);

  return {
    type: FETCH_STREAMER,
    payload: request
  };
}
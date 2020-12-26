import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const fetchGameDetail = id => async dispatch => {
  const res = await axios.get(gameDetailsURL(id));
  const data = res.data;

  dispatch({
    type: 'FETCH_GAME_DETAIL',
    payload: data,
  });
};

export const fetchScreenShot = id => async dispatch => {
  const res = await axios.get(gameScreenshotURL(id));
  const data = res.data;

  dispatch({
    type: 'FETCH_SCREENSHOT',
    payload: data,
  });
};

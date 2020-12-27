import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const fetchGameDetail = id => async dispatch => {
  try {
    dispatch({
      type: 'LOADING_REQUEST',
    });

    const res = await axios.get(gameDetailsURL(id));
    const data = res.data;

    dispatch({
      type: 'FETCH_GAME_DETAIL',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'LOADING_FAIL',
      payload: error.message,
    });
  }
};

export const fetchScreenShot = id => async dispatch => {
  try {
    dispatch({
      type: 'LOADING_REQUEST',
    });

    const res = await axios.get(gameScreenshotURL(id));
    const data = res.data;

    dispatch({
      type: 'FETCH_SCREENSHOT',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'LOADING_FAIL',
      payload: error.message,
    });
  }
};

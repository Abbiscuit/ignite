import axios from 'axios';
import { gameDetailsURL } from '../api';

export const fetchGameDetail = id => async dispatch => {
  const res = await axios.get(gameDetailsURL(id));
  const detailData = res.data.results;

  dispatch({
    type: 'FETCH_GAME_DETAIL',
    payload: {
      game: detailData,
    },
  });
};

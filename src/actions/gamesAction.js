import axios from 'axios';
import { popularGamesURL } from '../api';

// Action Creator
export const fetchGames = () => async dispatch => {
  // Fetch Axios
  const res = await axios.get(popularGamesURL());

  const popularData = await res.data.results;

  dispatch({
    type: 'FETCH_GAMES',
    payload: popularData,
  });
};

import axios from 'axios';
import { newGamesURL, popularGamesURL, upcomingGamesURL } from '../api';

// Action Creator
export const fetchPopularGames = () => async dispatch => {
  // Fetch Axios
  const res = await axios.get(popularGamesURL);

  const popularData = await res.data.results;

  dispatch({
    type: 'FETCH_POPULAR_GAMES',
    payload: popularData,
  });
};

export const fetchUpcomingGames = () => async dispatch => {
  // Fetch Axios
  const res = await axios.get(upcomingGamesURL);

  const upcomingData = await res.data.results;

  dispatch({
    type: 'FETCH_UPCOMING_GAMES',
    payload: upcomingData,
  });
};

export const fetchNewGames = () => async dispatch => {
  // Fetch Axios
  const res = await axios.get(newGamesURL);

  const newGamesData = await res.data.results;

  dispatch({
    type: 'FETCH_NEW_GAMES',
    payload: newGamesData,
  });
};

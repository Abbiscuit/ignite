import React, { useEffect } from 'react';
// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPopularGames,
  fetchNewGames,
  fetchUpcomingGames,
} from '../actions/gamesAction';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';

const Home = () => {
  // Get the location
  const { pathname } = useLocation();
  const pathId = pathname.split('/')[2];

  const dispatch = useDispatch();
  // FETCH GAMES
  useEffect(() => {
    dispatch(fetchUpcomingGames());
    dispatch(fetchPopularGames());
    dispatch(fetchNewGames());
  }, [dispatch]);

  // Get the data back
  const { popular, newGames, upcoming } = useSelector(state => state.games);

  return (
    <GameList>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(game => (
          <Game game={game} key={game.id} />
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popular.map(game => (
          <Game game={game} key={game.id} />
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map(game => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;

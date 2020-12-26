import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchPopularGames,
  fetchNewGames,
  fetchUpcomingGames,
} from '../actions/gamesAction';
import Game from '../components/Game';

const Home = () => {
  const dispatch = useDispatch();
  // FETCH GAMES
  useEffect(() => {
    dispatch(fetchUpcomingGames());
    dispatch(fetchPopularGames());
    dispatch(fetchNewGames());
  }, [dispatch]);

  // Get the data back
  const { popular, newGames, upcoming } = useSelector(state => state.games);

  console.log(upcoming);

  return (
    <GameList>
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

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from './actions/gamesAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
    return () => {};
  }, []);

  return (
    <div>
      <h1>Ignite</h1>
    </div>
  );
};

export default App;

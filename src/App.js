import React from 'react';
import { Route } from 'react-router-dom';
// Components
import Home from './pages/Home';

const App = () => {
  return (
    <Route path={['/game/:id', '/']}>
      <Home />
    </Route>
  );
};

export default App;

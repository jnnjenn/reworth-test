import { observer } from 'mobx-react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { newRoutes } from './routes';
import { render } from 'react-dom';

function App() {
  return (
    <Router>
      {newRoutes()}
    </Router>
  );
};

export default App;
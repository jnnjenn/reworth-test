import { BrowserRouter as Router } from 'react-router-dom';
import { newRoutes } from './routes';

function App() {
  return (
    <Router>
      {newRoutes()}
    </Router>
  );
};

export default App;
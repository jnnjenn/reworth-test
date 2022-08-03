import { Routes, Route } from 'react-router-dom';
import DirectoryPage from '../pages/DirectoryPage/DirectoryPage';

import Home from '../pages/Home/Home';

const newRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
			<Route path={'directory/'} element={<DirectoryPage />} />
    </Routes>
  );
};

export { newRoutes };

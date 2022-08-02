import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

const newRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
			<Route path={'directory/'} element={<Home />} />
      <Route path={'directory/:store/'} element={<Home />} />
    </Routes>
  );
};

export { newRoutes };

import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Catalog from '../pages/Psychologists/Psychologists';

import Favorites from 'pages/Favorites/Favorites';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;

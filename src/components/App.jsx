import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Favorites from 'pages/Favorites/Favorites';
import Psychologists from '../pages/Psychologists/Psychologists';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="psychologists" element={<Psychologists />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;

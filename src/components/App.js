import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import("../pages/HomePage"))
const Psychologists = lazy(() => import("../pages/Psychologists"))
const Favorites = lazy(() => import("../pages/Favorites"))

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<Psychologists />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
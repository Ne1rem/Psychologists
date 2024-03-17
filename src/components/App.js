import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useEffect, useState } from 'react';
import { auth } from '../firebase'; 
import { onAuthStateChanged } from 'firebase/auth';
import HomePage from 'pages/HomePage';
import Psychologists from 'pages/Psychologists';
import Favorites from 'pages/Favorites';
import { FilterContex, Auth} from '../../src/auth'

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [filter, setFilter] = useState(null);

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const logOut = () => {
    setCurrentUser({
      name: '',
      email: '',
    });
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const newUser = {
          name: user.displayName,
          email: user.email,
        };
        setCurrentUser(newUser);
        setIsLoggedIn(true);
      } else {
        setCurrentUser({
          name: '',
          email: '',
        });
        setIsLoggedIn(false);
      }
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <Auth.Provider value={{ currentUser, isLoggedIn }}>
      <FilterContex.Provider value={filter}>
        <div>
          <Navigate logOut={logOut} />
          <main>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/psychologists" element={<Psychologists changeFilter={changeFilter} />} />
                <Route path="/favorites" element={<Favorites />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </FilterContex.Provider>
    </Auth.Provider>
  );
};

export default App;

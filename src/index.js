import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import GlobalStyle from './components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './firebase'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/psychologists-services">
      <Provider store={store}>
      <GlobalStyle />
         <App/>
         </Provider>
        </BrowserRouter>
  </React.StrictMode>
);


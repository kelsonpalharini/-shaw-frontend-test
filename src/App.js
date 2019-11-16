import React from 'react';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import history from './services/history';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';

import { configureStore } from "./redux";

function App() {
  return (
    <Provider store={configureStore()}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000}/>
      </Router>
    </Provider>
  );
}

export default App;

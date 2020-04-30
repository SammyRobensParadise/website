import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles/index.css';
import Main from './pages/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();

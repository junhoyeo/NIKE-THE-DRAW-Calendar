import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './components/GlobalStyle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/reset.css';
import './css/main.css';

// import $ from './js/jquery.js';
// import './js/main.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createHistory from 'history/createBrowserHistory'

import Routes from './routes';

ReactDOM.render(
 <Routes history={createHistory} />,
 document.getElementById('root')
);
registerServiceWorker();
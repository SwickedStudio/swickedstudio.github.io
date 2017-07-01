import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/reset.css';
import './css/main.css';

import registerServiceWorker from './registerServiceWorker';

import createHistory from 'history/createBrowserHistory'

import Routes from './routes';

ReactDOM.render(
 <Routes history={createHistory} />,
 document.getElementById('root')
);
registerServiceWorker();
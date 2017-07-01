import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';
import Home from './components/Home';
import NotFound from './components/NotFound';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App} />
 </Router>
);
export default Routes;
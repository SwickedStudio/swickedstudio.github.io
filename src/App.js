import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <div>
      <Header />
      <hr/>
      <section class="main clearfix">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route component={NotFound}/>
      </Switch>
      </section>
    </div>
  </Router>
)
export default App
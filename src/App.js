import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Journal from './components/Journal';
import WorkInfo from './components/Work/WorkInfo';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <div>
      <Header />
      <section className="main clearfix">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/team" component={Team}/>
          <Route path="/work/:name" component={WorkInfo}/>
          <Route path="/journal" component={Journal}/>
          <Route component={NotFound}/>
        </Switch>
      </section>
    </div>
  </Router>
)
export default App
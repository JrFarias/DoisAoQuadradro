import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Register from './components/Register';
import Card from './components/Card';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/register" component={Register} />
      <Route path="/card" component={Card} />
    </div>
  </Router>
);

export default App;

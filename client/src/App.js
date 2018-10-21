import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Wallet from './components/Wallet';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);


const Login = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;

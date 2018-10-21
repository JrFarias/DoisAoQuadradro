import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Register from './components/Register';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
);


const Login = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;

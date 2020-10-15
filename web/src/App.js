import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import LoginGoogle from './components/LoginGoogle';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/auth/google" component={LoginGoogle} />
          </Switch>
      </Router>
  );
}

export default App;

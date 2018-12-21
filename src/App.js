import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Activities from './Activities';
import Time from './Time';
import Location from './Location';
import Choice from './Choice';
import Register from './Register';
import Points from './Points';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component= {Welcome} />
          <Route exact path='/login' component= {Login} />
          <Route exact path='/register' component= {Register} />
          <Route exact path='/choice' component= {Choice} />
          <Route exact path='/activities' component= {Activities} />
          <Route exact path='/time' component= {Time} />
          <Route exact path='/location' component= {Location} />
          <Route exact path='/points' component= {Points} />
        </Switch>
      </div>
    );
  }
}

export default App;

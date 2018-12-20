import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './style.css';
import Activities from '../Activities';

class Nav extends Component {
  constructor() {
    super()
  }


  render() {
    return(
      <nav className = "navBar">
        <ul>
          <Link to='/'> </Link>
          <Link to='/activities'>Activity</Link>
          <Link to ='/time'>Time</Link>
          <Link to ='/location'>Location</Link>
        </ul>
      </nav>
    )
  }
}
export default Nav;

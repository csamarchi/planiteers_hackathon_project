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
          <Link to='/choice'> <img className='logo' src='tree_circle_logo_rgb.png' /> </Link>
          <Link to='/'> home</Link>
          <Link to='/activities'>activity</Link>
          <Link to ='/location'>location</Link>
          <Link to ='/time'>time</Link>
        </ul>
      </nav>
    )
  }
}
export default Nav;

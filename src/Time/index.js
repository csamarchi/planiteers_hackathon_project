import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './style.css';

class Time extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div className='background'>
        <Nav />
        <div>
          <h1 className='header' > Choose a Time </h1>
          
        </div>
      </div>
    )
  }
}

export default Time;

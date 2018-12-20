import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './style.css';

class Choice extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div>
        <div className='background'>
          <Nav />

          <div className='wrapper'>

            <Link to='/activities'>
            <div className='activityBox'>
              <h1> Choose By Activity </h1>
            </div>
            </Link>
            <br/>
            <div className='dateBox'>
              <h1> Choose By Date/Time </h1>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Choice;

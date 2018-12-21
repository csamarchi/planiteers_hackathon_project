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
                  <h3 className='choiceText'> Choose By Activity </h3>
                </div>
              </Link>
                <br/>
                <br/>
                <br/>
              <Link to='/time'>
                <div className='dateBox'>
                  <h3 className='choiceText'> Choose By Date/Time </h3>
                </div>
              </Link>
            </div>
        </div>
      </div>
    )
  }
}

export default Choice;

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './style.css';

class Activities extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div>
        <Nav />
        <div>
          <h1 className='header' > Choose an Activity </h1>

          <Link to ='/time'>
            <div className="circle">
              <h3 className='categoryButtonText'> Plant a tree </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="circle">
              <h3 className='categoryButtonText'> Tree maintenance </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="circle">
              <h3 className='categoryButtonText'> Water tree </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="circle">
              <h3 className='categoryButtonText'> Pick fruit </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="circle">
              <h3 className='categoryButtonText'> Farmers Market </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="circle">
              <h3 className='categoryButtonText'> Transport</h3>
            </div>
          </Link>

        </div>
      </div>
    )
  }
}

export default Activities;

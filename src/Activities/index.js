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
      <div className='background'>
        <Nav />
        <h1 className='header' > Choose an Activity </h1>
        <div className='activityWrapper'>

          <Link to ='/time'>
            <div className="plantTree">
              <h3 className='categoryButtonText'> Plant a tree </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="waterTree">
              <h3 className='categoryButtonText'> Water Tree </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="pickFruit">
              <h3 className='categoryButtonText'> Pick Fruit </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="market">
              <h3 className='categoryButtonText'> Farmers Market </h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="maintenance">
              <h3 className='categoryButtonText'> Tree Maintenance</h3>
            </div>
          </Link>

          <Link to ='/time'>
            <div className="transport">
              <h3 className='categoryButtonText'> Transport</h3>
            </div>
          </Link>

        </div>
      </div>
    )
  }
}

export default Activities;

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './style.css';

class Location extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div className='background'>
        <Nav />
          <h1 className='header' > Choose a Location </h1>
          <div className='div'>

            <div className='locationWrapper'>
              <Link to ='/time'>
                <div className="gillis">
                  <h3 className='locationButtonText'> Gillis Neighborhood Park </h3>
                </div>
              </Link>

              <Link to ='/time'>
                <div className="auditorium">
                  <h3 className='locationButtonText'> Auditorium Shores at Town Lake </h3>
                </div>
              </Link>

              <Link to ='/time'>
                <div className="stacy">
                  <h3 className='locationButtonText'> Little Stacy Neighborhood Park </h3>
                </div>
              </Link>
            </div>

              <div className='locationWrapper2'>
                <Link to ='/time'>
                  <div className="nicholas">
                    <h3 className='locationButtonText'> Nicholas Dawson Neighborhood Park</h3>
                  </div>
                </Link>

                <Link to ='/time'>
                  <div className="republic">
                    <h3 className='locationButtonText'> Republic Square</h3>
                  </div>
                </Link>

                <Link to ='/time'>
                  <div className="waller">
                    <h3 className='locationButtonText'> Waller Beach at Town Lake</h3>
                  </div>
                </Link>
              </div>
          </div>
      </div>
    )
  }
}

export default Location;

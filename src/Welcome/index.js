import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './style.css';

class Welcome extends Component {
  constructor() {
    super();
  }
  render() {

    return (

        <div className='background'>
          <Nav />
          <div>
            <div className='logoHeader'>
              <img className='header' src='tree_circle_logo_rgb.png' />
              <h1 className='planiteers'> planiteers </h1>
            </div>
                <div className='welcome'>

                  <Link to ="/login">
                    <button className="loginButton"> sign in </button>
                  </Link>

                  <Link to ="/register">
                    <button className="registerButton"> register </button>
                  </Link>
                </div>
            </div>
        </div>

    )
  }
}

export default Welcome;

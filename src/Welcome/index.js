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
      <div>
        <Nav />
        <div>
          <h1 className='header' > Logo </h1>
            <div className='welcome'>
              <Link to ="/login">
                <button className="loginButton"> Sign in </button>
              </Link>

              <Link to ="/register">
                <button className="registerButton"> Register </button>
              </Link>

            </div>
        </div>
      </div>
    )
  }
}

export default Welcome;

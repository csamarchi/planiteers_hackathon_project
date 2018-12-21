import React, {Component} from 'react';
import './style.css';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {

    return (
      <div className='background'>
        <Nav />
          <div className='logoHeader'>
            <img className='header' src='tree_circle_logo_rgb.png' />
            <h1 className='planiteers'> planiteers </h1>
          </div>
            <form >
              <label className="username">
                <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
              </label>
              <label className="password">
                <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
              </label>
                <Link to='/choice'> <input className="loginPageButton" type='Submit' value='sign in'/> </Link>
            </form>

      </div>
    )
  }
}

export default Login;

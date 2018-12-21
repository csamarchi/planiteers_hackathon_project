import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './style.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
          <label className="name">
            <input type='text' name='name' placeholder='name' onChange={this.handleChange}/>
          </label>
          <label className="email">
            <input type='text' name='email' placeholder='email' onChange={this.handleChange}/>
          </label>
          <label className="registerUsername">
            <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
          </label>
          <label className="registerPassword">
            <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
          </label>
            <Link to='/choice'> <input className="signUpButton" type='Submit' value='sign up'/> </Link>
        </form>

      </div>
    )
  }
}

export default Register;

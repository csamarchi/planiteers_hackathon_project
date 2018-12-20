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
          <form >
          <label className="name">
            First Name:
            <input type='text' name='name' placeholder='username' onChange={this.handleChange}/>
          </label>
          <label className="username">
            Username :
            <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
          </label>
          <label className="password">
            Password : 
            <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
          </label>
            <Link to='/choice'> <input className="loginButton" type='Submit' value='sign up'/> </Link>
        </form>

      </div>
    )
  }
}

export default Register;

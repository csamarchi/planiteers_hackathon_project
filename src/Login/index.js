import React, {Component} from 'react';
import './style.css';
import Nav from '../Nav';

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
      <div>
        <Nav />
          <form >
          <label className="username">
            Username:
            <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
          </label>
          <label className="password">
            Password:
            <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
          </label>
            <input className="registerButton" type='Submit' value='Login'/>
        </form>
      </div>
    )
  }
}

export default Login;

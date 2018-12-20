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

            <form >
              <label className="username">
                <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
              </label>
              <label className="password">
                <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
              </label>
                <Link to='/choice'> <input className="loginPageButton" type='Submit' value='Login'/> </Link>
            </form>

      </div>
    )
  }
}

export default Login;

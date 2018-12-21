import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './styles.css';

class Points extends Component {
  constructor() {
    super();
  }
  render() {

    return (
        <div className='background'>
          <Nav />
            <h1 className='headers'> You will earn: </h1>
            <h1 className='points'> 15  </h1>
            <h1 className='headers'> Points </h1>
            <Link to='/'> <button className='pointsAccept'> Accent </button> </Link>
            <Link to='/choice'><button className='pointsDecline'> Decline </button></Link>
        </div>
    )
  }
}

export default Points;

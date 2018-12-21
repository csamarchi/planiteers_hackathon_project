import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './style.css';

class Time extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div className='background'>
        <Nav />
        <div>
          <h1 className='header' > Choose a Time </h1>

          <h3> Select a Date </h3>
          <form>
            <select>
              <option>12/22/2018</option>
              <option>12/23/2018</option>
              <option>12/24/2018</option>
              <option>12/26/2018</option>
            </select>
          </form>
          <h3> Select a Start Time </h3>
          <form>
            <select>
              <option value='06:00AM'>06:00 AM</option>
              <option value='07:00AM'>07:00 AM</option>
              <option value='18:00AM'>08:00 AM</option>
              <option value='19:00AM'>09:00 AM</option>
            </select>
          </form>
          <h3> Select an End Time </h3>
          <form>
            <select>
              <option value='06:00AM'>06:00 AM</option>
              <option value='07:00AM'>07:00 AM</option>
              <option value='18:00AM'>08:00 AM</option>
              <option value='19:00AM'>09:00 AM</option>
            </select>
          </form>
      
        </div>
      </div>
    )
  }
}

export default Time;

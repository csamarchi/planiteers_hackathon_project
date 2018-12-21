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
          <div className='timeWrapper'>
          <div>
          <h3 className='timeText'> Select a Date </h3>
          <form>
            <select>
              <option>12/22/2018</option>
              <option>12/23/2018</option>
              <option>12/24/2018</option>
              <option>12/26/2018</option>
              <option>12/27/2018</option>
              <option>12/28/2018</option>
              <option>12/29/2018</option>
              <option>12/30/2018</option>
              <option>12/31/2018</option>
            </select>
          </form>
          </div>
          <div>
          <h3 className='timeText'> Select a Start Time </h3>
          <form>
            <select>
              <option> 06:00 AM</option>
              <option> 07:00 AM</option>
              <option> 08:00 AM</option>
              <option> 09:00 AM</option>
              <option> 10:00 AM</option>
              <option> 11:00 AM</option>
              <option> 12:00 PM</option>
              <option> 1:00 PM</option>
              <option> 2:00 PM</option>
              <option> 3:00 PM</option>
              <option> 4:00 PM</option>
              <option> 5:00 PM</option>
            </select>
          </form>
          </div>
          <div>
          <h3 className='timeText'> Select an End Time </h3>
          <form>
            <select>
              <option> 06:00 AM</option>
              <option> 07:00 AM</option>
              <option> 08:00 AM</option>
              <option> 09:00 AM</option>
              <option> 10:00 AM</option>
              <option> 11:00 AM</option>
              <option> 12:00 PM</option>
              <option> 1:00 PM</option>
              <option> 2:00 PM</option>
              <option> 3:00 PM</option>
              <option> 4:00 PM</option>
              <option> 5:00 PM</option>
            </select>
          </form>
          <button className='submitTime'> Confirm </button>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Time;

import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../photo.png'

class Navbar extends Component {

  render() {
    return (
      <nav style={{backgroundColor: 'red' }} className="navbar  fixed-top  flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
         
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={photo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
          <p style={{color: 'black'}}>Cryptogram </p>
          place to smart your contracts..
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small style={{color: 'black'}} id="account">{this.props.account}</small>
            </small>
            { this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
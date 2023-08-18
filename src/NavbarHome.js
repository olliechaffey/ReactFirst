import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  return (
    <div className="container-fluid margin-m">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className='col-lg-6'>
            <p>Computer Science Graduate with a passion about information security, networks, and the next generation of technology.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className='links-main'>
            <div className="row">
              <div className="col-2">
                <a className="nav-link link co-nav" href="/projects">About</a>
              </div>
              <div className="col-2">
                <a className="nav-link link co-nav" href="#">Contact</a>
              </div>
              <div className="col-2">
                <a className="nav-link link co-nav" href="#">Instagram</a>
              </div>
              <div className="col d-flex justify-content-end">
                <a className="nav-link disabled" href="#">©2023</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

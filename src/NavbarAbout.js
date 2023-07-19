import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="nav-link co-name disabled" href="#">Ollie Chaffey</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link co-inactive" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link co-inactive" href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link co-inactive" href="/projects">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link co-white" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link co-inactive" href="#">Blog</a>
          </li>
          <li className="nav-item d-flex align-items-center co-inactive b-icon">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faSun} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import the custom CSS file

const Project1 = () => {
  return (
    <div className="container-fluid margin-p">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className='col-lg-8 nav-margin-l'>
            <h1 className="title-heading">RM v.1.0</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ligula sed eros volutpat fermentum eget eget ex. Quisque vulputate hendrerit sodales. Maecenas sollicitudin sapien pretium mauris bibendum, interdum finibus nulla finibus. Curabitur convallis ex efficitur, pulvinar nisl at, faucibus libero. Nullam in vulputate dui, sit amet molestie massa. Aenean at enim nec orci tincidunt sagittis sed eu lacus. Sed sodales dui eu nunc finibus, sit amet luctus elit molestie. In hac habitasse platea dictumst. Nulla facilisi.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className='links-main'>
            <div className="row">
              <div className="col-6">
              <a className="nav-link link co-nav disabled" href="/projects">Risk Management</a>
              <h6 className='sub-heading'>Team</h6>
              <h6 className=''><span className='co-nav'>Oliver Chaffey</span></h6>
              <ul className='list-none'>
                <li>Myself</li>
              </ul>
              </div>
              <div className="col-6">
              <a className="nav-link link co-nav disabled" href="/projects">2023</a>
              <h6 className='sub-heading'>Final Year Project</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-lg-12 d-flex justify-content-center'>
        <img className="rounded w-75 img-bac" src='./images/project-fyp.png'></img>
        </div>
      </div>
    </div>
  );
}

export default Project1;

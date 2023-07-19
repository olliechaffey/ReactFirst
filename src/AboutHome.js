import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center background-white">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="text-section">
              <h1 className='home-heading'>Hi,</h1>
              <h1 className='home-heading'>I'm <span className='ollie'>Ollie</span></h1>
              <h1 className='home-heading'>Recent Graduate</h1>
              <Link to="/contact">
                <button className="mt-3 btn btn-primary">Contact</button>
              </Link>
              <div className="image-lines mt-5">
                <img src="./images/icons-1.png" alt="Image" />
                <img src="./images/icons-1.png" alt="Image" />
                <img src="./images/icons-1.png" alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="image-section text-md-end">
              <img src="./images/icons-1.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

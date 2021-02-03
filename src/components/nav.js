import React from 'react';
// import './../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className="nav">
        <ul className="nav-menu list-unstyled mb-0">
          <li>
            <Link to="/">
              <i className="ion-home text-white"></i>
            </Link>
          </li>
          <li>
            <Link to="/React-Portfolio/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/React-Portfolio/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/React-Portfolio/blog">
              Blog
            </Link>
          </li>
        </ul>

        <div className="social-menu form-inline ml-auto">
          <ul className="list-unstyled mb-0 social-icons">
            <li><i className="ion-social-facebook"></i></li>
            <li><i className="ion-social-github"></i></li>
            <li><i className="ion-social-twitter"></i></li>
            <li><i className="ion-social-instagram"></i></li>
          </ul>
          <button className="btn btn-success m-2 font-weight-bold crv-25 px-3">Hire Me !</button>
        </div>
      </div>
    </nav>
    // <nav>
    //   <div className="">Nav</div>
    //   <ul>
    //     <Link to="/about">
    //       <li>About</li>
    //     </Link>
    //     <Link to="/contact">
    //       <li>Contact</li>
    //     </Link>
    //   </ul>
    // </nav>
  );
}

export default Nav;

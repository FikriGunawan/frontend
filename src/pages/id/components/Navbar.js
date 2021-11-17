import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import './Navbar.css';
import imgLogo from '../../../assets/images/logo.png';
import imgClose from '../../../assets/images/close.png';

const Navbar = ({langID, langEN}) => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setClick2(false);
  };

  const closeMenu = () => setClick(false);

  const [click2, setClick2] = useState(false);

  const toggleClick = () => setClick2(!click2);

  const closeMenu2 = () => {
    setClick(false);
    setClick2(false);
  };

  return (
    <>
      <nav className='container-fluid secNav'>
		    <div className='row'>
          {/* Logo */}
          <div className='col-9 col-lg-8 navLogo' data-aos='fade-down' data-aos-duration='1000'>
            <Link to='/'>
              <img className='img-fluid' src={imgLogo} alt='Okular Mentorship Program' />
            </Link>
          </div>
          {/* Language Burger */}
          <div className='col-3 col-lg-4 navMenu text-right' data-aos="fade-down" data-aos-duration="1000">
            <div className='wrap'>
              <ul className='lang d-none d-lg-inline-block'>
                <li>
                  <Link to={langEN}>
                    EN
                  </Link>
                </li>
                <li>
                  <Link className='active' to={langID}>
                    ID
                  </Link>
                </li>
              </ul>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
            </div>
          </div>
          {/* Side Navigation */}
          <div className={click ? 'navSide active' : 'navSide'}>
            <ul className='lang d-block d-lg-none'>
              <li>
                <Link to={langEN} onClick={closeMenu}>
                  EN
                </Link>
              </li>
              <li>
                <Link className='active' to={langID} onClick={closeMenu}>
                  ID
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='/' onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/id/quiz' onClick={closeMenu}>
                  Quiz
                </Link>
              </li>
              <li>
                <a className='toggle' onClick={toggleClick}>Classes and Packages</a>
                <ul className={click2 ? 'inner show' : 'inner'}>
                  <li>
                    <Link to='/id/fundamental-design-course' onClick={closeMenu2}>
                      Fundamental Design Course
                    </Link>
                  </li>
                  <li>
                    <Link to='/id/design-startup-course' onClick={closeMenu2}>
                      Design Startup Course
                    </Link>
                  </li>
                  <li>
                    <Link to='/id/complete-design-course' onClick={closeMenu2}>
                      Complete Design Course
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/id/free-resources' onClick={closeMenu}>
                  Free Resources
                </Link>
              </li>
              {/* <li>
                <Link to='/id/example-quiz' onClick={closeMenu}>
                  Ex Quiz
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
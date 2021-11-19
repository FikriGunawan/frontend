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
            <a href='/en/home'>
              <img className='img-fluid' src={imgLogo} alt='Okular Mentorship Program' />
            </a>
          </div>
          {/* Language Burger */}
          <div className='col-3 col-lg-4 navMenu text-right' data-aos="fade-down" data-aos-duration="1000">
            <div className='wrap'>
              <ul className='lang d-none d-lg-inline-block'>
                <li>
                  <a className='active' href={langEN}>
                    EN
                  </a>
                </li>
                <li>
                  <a href={langID}>
                    ID
                  </a>
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
                <a className='active' href={langEN} onClick={closeMenu}>
                  EN
                </a>
              </li>
              <li>
                <a href={langID} onClick={closeMenu}>
                  ID
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='/en/home' onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href='/en/quiz' onClick={closeMenu}>
                  Quiz
                </a>
              </li>
              <li>
                <a className='toggle' onClick={toggleClick}>Classes and Packages</a>
                <ul className={click2 ? 'inner show' : 'inner'}>
                  <li>
                    <a href='/en/fundamental-design-course' onClick={closeMenu2}>
                      Fundamental Design Course
                    </a>
                  </li>
                  <li>
                    <a href='/en/design-startup-course' onClick={closeMenu2}>
                      Design Startup Course
                    </a>
                  </li>
                  <li>
                    <a href='/en/complete-design-course' onClick={closeMenu2}>
                      Complete Design Course
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='/en/free-resources' onClick={closeMenu}>
                  Free Resources
                </a>
              </li>
              {/* <li>
                <a href='/en/example-quiz' onClick={closeMenu}>
                  Ex Quiz
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
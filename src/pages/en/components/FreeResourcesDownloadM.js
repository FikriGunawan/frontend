import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../App.css';
import { Markup } from 'interweave';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


const FreeResourcesDownloadM = ({resourceid, Title, Form_Brief, Thumbnail}) => {
  return(
    <div className='item'>
      <a href={`/en/resources/${resourceid}`}>
        <div className='wrapImage'>
          <img className='img-fluid cover boxc' src={`http://ompcms.okular.co.id${Thumbnail.formats.small.url}`} alt='Okular Mentorship Program' />
        </div>
        <p><Markup tagName='b' content={Title} /></p>
        <Markup tagName='p' content={Form_Brief} />
      </a>
    </div>
  );
}

export default FreeResourcesDownloadM;
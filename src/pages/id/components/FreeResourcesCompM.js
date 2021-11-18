import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../App.css';
import fetch from 'isomorphic-fetch';
import FreeResourcesDownloadM from './FreeResourcesDownloadM';

// Owl Carousel Settings
const optionCarouselResources = {
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  nav: true,
	dots: true,
  navText: [
		"<img src='https://okularmentorshipprogram.netlify.app/assets/images/arrowLeft.png'>",
		"<img src='https://okularmentorshipprogram.netlify.app/assets/images/arrowRight.png'>"
	],
  responsive:{
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
};


class FreeResourcesCompM extends React.Component{

  constructor(){
    super()
    this.state={
      blogs: []
    }
  }
  
  componentWillMount(){
    fetch('http://ompcms.okular.co.id/resources?_locale=id').then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((blogs) => {
      this.setState({blogs: blogs});
      console.log(blogs);
    })
  }
    
  render(){
    return (
      <>
        {/*  */}
        <div className='d-block d-lg-none'>
          {
            this.state.blogs.map(({id, Title, Form_Brief, Thumbnail}) => (
              <FreeResourcesDownloadM 
                key={id}
                resourceid={id}
                Title={Title}
                Form_Brief={Form_Brief}
                Thumbnail={Thumbnail}
              />
            ))
          }
        </div>
        {/*
        <OwlCarousel className='carouselResources owl-theme d-block d-lg-none' {...optionCarouselResources}>
          {
            this.state.blogs.map(({id, Title, Form_Brief, Thumbnail}) => (
              <FreeResourcesDownloadM 
                key={id}
                resourceid={id}
                Title={Title}
                Form_Brief={Form_Brief}
                Thumbnail={Thumbnail}
              />
            ))
          }
          <div className='item'>
            <Link className='cursorHoverImg' to='/id/creating-your-ultimate-portfolio'>
              <div className='wrapImage'>
                <img className='img-fluid cover boxc' src='/static/media/portfolio-cover.0ec41a17.png' alt='Okular Mentorship Program' />
              </div>
              <p><b>CREATING YOUR ULTIMATE PORTFOLIO</b></p>
              <p>Apakah kalian yakin dengan portofolio kalian? Dengan panduan ini, kita akan memberi kalian tips tentang bagaimana membuat portofolio kalian lebih menarik.</p>
            </Link>
          </div>
        </OwlCarousel>
        */}
      </>
    )
  }
}

export default FreeResourcesCompM;
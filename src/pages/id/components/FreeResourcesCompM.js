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
		"<img src='data:image/png;base64,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'>",
		"<img src='data:image/png;base64,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'>"
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
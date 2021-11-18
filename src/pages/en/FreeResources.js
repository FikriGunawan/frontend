import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import imgArrowDownload from '../../assets/images/arrowDownload.png';
import imgResourcesHeader01 from '../../assets/images/resources/resourcesHeader01.png';
import imgResourcesHeaderMobile01 from '../../assets/images/resources/resourcesHeaderMobile01.png';
import imgArrowDownBlack from '../../assets/images/arrowDownBlack.png';
import imgResourcesImages01 from '../../assets/images/resources/resourcesImages01.png';
import imgResourcesImagesMobile01 from '../../assets/images/resources/resourcesImagesMobile01.png';
import imgStepbystepcover from '../../assets/images/resources/step-by-step-cover.png';
import imgBuildingyourresumecover from '../../assets/images/resources/building-your-resume-cover.png';
import imgLogodesignproposaltemplatecover from '../../assets/images/resources/logo-design-proposal-template-cover.png';
import imgWebsitedesignproposaltemplatecover from '../../assets/images/resources/website-design-proposal-template-cover.png';
import imgPortfoliocover from '../../assets/images/resources/portfolio-cover.png';
import imgFinalprojectcover from '../../assets/images/resources/final-project-cover.png';
import fetch from 'isomorphic-fetch';
import { Markup } from 'interweave';
import FreeResourcesCompLG from './components/FreeResourcesCompLG';
import FreeResourcesCompM from './components/FreeResourcesCompM';

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


class FreeResources extends React.Component{

  constructor(){
    super()
    this.state={
      FRPage: [],
      Header_Image: '',
      Header_Image_Mobile: '',
      Brief_Image: '',
      Brief_Image_Mobile: ''
    }
  }
  
  componentWillMount(){
    fetch('http://ompcms.okular.co.id/free-resources?_locale=en').then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((FR) => {
      this.setState({FRPage: FR});
      this.setState({Header_Image: FR.Header_Image.url});
      this.setState({Header_Image_Mobile: FR.Header_Image_Mobile.url});
      this.setState({Brief_Image: FR.Brief_Image.url});
      this.setState({Brief_Image_Mobile: FR.Brief_Image_Mobile.url});
    })
  }
    
  render(){
    const {
      Brief_Sub_Title, 
      Brief_Title, 
      Brief_Desc, 
      Download_Sub_Title, 
      Download_Title
    } = this.state.FRPage;
    return (
      <>
        {/* Navbar */}
        <Navbar
          langID='/id/free-resources'
          langEN='/en/free-resources'
        />

        {/* Main */}
        <div className='cursorHover'>
          <img className='text' src={imgArrowDownload} />
        </div>
        <div id='mainResources' className='container-fluid overflow-hidden'>
          <div className='row'>

            {/* Header */}
            <div className='col-lg-12 p-0 compHeader'>
              <img className='img-fluid background d-none d-lg-block moveTop' src={`http://ompcms.okular.co.id${this.state.Header_Image}`} alt='Okular Mentorship Program' />
              <img className='img-fluid background d-block d-lg-none' src={`http://ompcms.okular.co.id${this.state.Header_Image_Mobile}`} alt='Okular Mentorship Program' />
              <div className='moveDownHeader moveReWiHeader moveReHeHeader boxc'>
                <div className='circle boxc'></div>
              </div>
              <a id='godown' className='moveTop' href='#resourcesBrief'>
                <img src={imgArrowDownBlack} />
              </a>
            </div>

            {/* Brief */}
            <div id='resourcesBrief' className='col-lg-12 pt-m-20p py-lg-10p px-m-10p px-lg-5p resourcesBrief'>
              <div className='compBrief'>
                <Markup tagName='h6' content={Brief_Sub_Title} />
                <Markup tagName='h3' content={Brief_Title} />
                <div className='brief'>
                  <Markup tagName='div' content={Brief_Desc} />
                </div>
              </div>
              <img className='img-fluid image d-none d-lg-block' src={`http://ompcms.okular.co.id${this.state.Brief_Image}`} alt='Okular Mentorship Program' />
            </div>
            <div className='col-12 pb-m-20p px-m-0 resourcesBrief d-inline-block d-lg-none'>
              <img className='img-fluid image' src={`http://ompcms.okular.co.id${this.state.Brief_Image_Mobile}`} alt='Okular Mentorship Program' />
            </div>

            {/* Download */}
            <div className='col-lg-12 pb-m-20p py-lg-10p px-m-10p px-lg-5p resourcesDownload bgWhite'>
              <div className='compBrief pb-lg-5p text-center'>
                <Markup tagName='h6' content={Download_Sub_Title} />
                <Markup tagName='h3' content={Download_Title} />
              </div>
              <div className='container-fluid d-none d-lg-block'>
                <div className='row'>
                  <FreeResourcesCompLG />
                </div>
              </div>
              <FreeResourcesCompM />
            </div>

          </div>
        </div>

        {/* Footer */}
        <Footer />
      </>
    )
  }
}

export default FreeResources;
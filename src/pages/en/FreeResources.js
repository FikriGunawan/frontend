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
import FreeResourcesDownloadLG from './components/FreeResourcesDownloadLG';
import FreeResourcesDownloadM from './components/FreeResourcesDownloadM';

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
      blogs: []
    }
  }
  
  componentWillMount(){
    fetch('http://ompcms.okular.co.id/resources?_locale=en').then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((blogs) => {
      this.setState({blogs: blogs});
    })
  }
    
  render(){
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
              <img className='img-fluid background d-none d-lg-block moveTop' src={imgResourcesHeader01} alt='Okular Mentorship Program' />
              <img className='img-fluid background d-block d-lg-none' src={imgResourcesHeaderMobile01} alt='Okular Mentorship Program' />
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
                <h6>Iya Gratis!</h6>
                <h3>Berbagi untuk Industri Kreatif yang Lebih Baik</h3>
                <div className='brief'>
                  <p>Tujuan kita dalam membuat panduan gratis ini agar kita dapat berbagi pengalaman untuk membantu kalian menjadi lebih baik. Kita ingin kalian berjalan lebih dekat menuju kesuksesan, dan menciptakan banyak hal menakjubkan. Oleh karena itu, di sini kalian akan menemukan berbagai panduan yang akan menjadi media bantuan dalam proses kalian menjadi seorang profesional.</p>
                </div>
              </div>
              <img className='img-fluid image d-none d-lg-block' src={imgResourcesImages01} alt='Okular Mentorship Program' />
            </div>
            <div className='col-12 pb-m-20p px-m-0 resourcesBrief d-inline-block d-lg-none'>
              <img className='img-fluid image' src={imgResourcesImagesMobile01} alt='Okular Mentorship Program' />
            </div>

            {/* Download */}
            <div className='col-lg-12 pb-m-20p py-lg-10p px-m-10p px-lg-5p resourcesDownload bgWhite'>
              <div className='compBrief pb-lg-5p text-center'>
                <h6>Biarkan Kita Memperjelas</h6>
                <h3>Free Downloadable <br />Resources</h3>
              </div>
              <div className='container-fluid d-none d-lg-block'>
                <div className='row'>
                  {
                    this.state.blogs.map(({id, Title, Form_Brief, Thumbnail}) => (
                      <FreeResourcesDownloadLG 
                        key={id}
                        resourceid={id}
                        Title={Title}
                        Form_Brief={Form_Brief}
                        Thumbnail={Thumbnail}
                      />
                    ))
                  }
                </div>
              </div>
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
              </OwlCarousel>
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
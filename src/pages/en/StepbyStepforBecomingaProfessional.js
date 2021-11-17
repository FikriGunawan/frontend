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
import imgStepbystepheader from '../../assets/images/resources/step-by-step-header.jpg';
import imgStepbystepheadermobile from '../../assets/images/resources/step-by-step-header-mobile.jpg';
import imgArrowDown from '../../assets/images/arrowDown.png';
import imgStepbystepimages from '../../assets/images/resources/step-by-step-images.png';
import imgStepbystepornament from '../../assets/images/resources/step-by-step-ornament.png';
import imgStepbystepornamentmobile from '../../assets/images/resources/step-by-step-ornament-mobile.png';
import imgBuildingyourresumecover from '../../assets/images/resources/building-your-resume-cover.png';
import imgLogodesignproposaltemplatecover from '../../assets/images/resources/logo-design-proposal-template-cover.png';
import imgWebsitedesignproposaltemplatecover from '../../assets/images/resources/website-design-proposal-template-cover.png';
import imgPortfoliocover from '../../assets/images/resources/portfolio-cover.png';
import imgFinalprojectcover from '../../assets/images/resources/final-project-cover.png';

// Form
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_nnr4tu9',
    'template_tu72t9p',
    e.target,
    'user_MlLNxrp3PV3vyrlG5uG5C'
    ).then((result) => {
      console.log(result.text);
      window.location.href = 'http://ompfe.okular.co.id/static/media/OMP-Step-by-Step-for-Becoming-a-Professional.914504af.pdf';
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}

// Owl Carousel Settings
const optionCarouselResourcesDetailOther = {
  margin: 0,
  responsiveClass: true,
  autoplay: false,
  loop: false,
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
      items: 3
    },
    1000: {
      items: 3
    }
  },
};


const StepbyStepforBecomingaProfessional = () => {
  
  return (
    <>
      {/* Navbar */}
      <Navbar
        langID='/id/step-by-step-for-becoming-a-professional'
        langEN='/en/step-by-step-for-becoming-a-professional'
      />

      {/* Main */}
      <div className='cursorHover'>
        <p className='text'>See More</p>
      </div>
      <div id='mainResourcesDetail' className='container-fluid'>
        <div className='row'>

          {/* Header */}
          <div className='col-lg-12 resourcesDetailHeader'>
            <div className='wrap'>
              <h1>
                Step by Step<br />
                for Becoming a<br />
                Professional
              </h1>
            </div>
            <img className='img-fluid background d-none d-lg-block' src={imgStepbystepheader} alt='Okular Mentorship Program' />
            <img className='img-fluid background d-block d-lg-none' src={imgStepbystepheadermobile} alt='Okular Mentorship Program' />
            <a id='godown' href='#resourceDetailForm'>
              <img src={imgArrowDown} />
            </a>
          </div>

          {/* Form */}
          <div id='resourceDetailForm' className='col-lg-4 py-m-0 py-lg-10p px-m-0 px-lg-5p resourcesDetailForm'>
            <img className='img-fluid d-none d-lg-block' src={imgStepbystepimages} alt='Okular Mentorship Program' />
            <img className='img-fluid ornament d-none d-lg-block' src={imgStepbystepornament} alt='Okular Mentorship Program' />
          </div>
          <div className='col-lg-8 py-m-20p py-lg-10p px-m-10p px-lg-5p resourcesDetailForm'>
            <div className='wrap'>
              <h6>Step by step for becoming a professional</h6>
              <p>Are you fresh graduates? Or maybe you are still looking for a job, but not sure where to start? This template will help you through it!</p>
            </div>
            <img className='img-fluid d-block d-lg-none' src={imgStepbystepimages} alt='Okular Mentorship Program' />
            <form onSubmit={sendEmail}>
              <input type='hidden' name='your-resources' className='form-control' value='Step by Step for Becoming a Professional'/>
              <div className='form-row'>
                <div className='form-group col-lg-6 pr-lg-5p'>
                  <label>Your name here:</label>
                  <input type='text' name='your-name' className='form-control' />
                  </div>
                <div className='form-group col-lg-6'>
                  <label>Your e-mail:</label>
                  <input type='email' name='your-email' className='form-control' />
                  </div>
                <div className='form-group col-lg-6 pr-lg-5p'>
                  <label>Your phone:</label>
                  <input type='number' name='your-phone' className='form-control' />
                  </div>
                <div className='form-group col-lg-6'>
                  <label>Can we email you guys?</label>
                  <select name='your-subject' className='form-control'>
                      <option value='Ya' selected>Yes</option>
                      <option value='Tidak Terimakasih'>No, Thanks</option>
                  </select>
                </div>
              </div>
              <div className='disclaimer'>
                <p><b>Disclaimer:</b> We will use the information you provide in this registration to keep in touch, send you updates, and send marketing emails about our products and services. You can unsubscribe at any time via the link in the footer of our email. For more information, please read our Privacy Policy.</p>
              </div>
              <input type='submit' className='btnBlack' value='Download'></input>
            </form>
          </div>
          <div className='col-12 pb-m-20p px-m-0 resourcesDetailForm d-inline-block d-lg-none'>
            <img className='img-fluid ornament' src={imgStepbystepornamentmobile} alt='Okular Mentorship Program' />
          </div>

          {/* Other */}
          <div className='col-lg-12 resourcesDetailOther'>
            <div className='compBrief text-center'>
              <h6>Also Download</h6>
              <h3>Others</h3>
            </div>
            <OwlCarousel className='carouselResourcesDetailOther owl-theme pt-lg-5p' {...optionCarouselResourcesDetailOther}>
              <div className='item'>
                <Link to='/en/building-your-resume'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgBuildingyourresumecover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Building your resume</span></p>
                      <p>Don't know where to start a resume? This guide will help you build a resume from scratch.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item'>
                <Link to='/en/logo-design-proposal-template'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgLogodesignproposaltemplatecover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Logo Design Proposal</span></p>
                      <p>Do you need tips for preparing a proposal for your logo design? This free media guide will give you a composition of content that can be included in your proposal.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item'>
                <Link to='/en/website-design-proposal-template'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgWebsitedesignproposaltemplatecover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Website Design Proposal Template</span></p>
                      <p>Do you have enough detail in your website design proposal? We provide a structure that will strengthen the proposal for your website design project.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item'>
                <Link to='/en/creating-your-ultimate-portfolio'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgPortfoliocover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Creating Your Ultimate Portfolio</span></p>
                      <p>Are you sure about your portfolio? With this guide, we will give you tips on how to make your portfolio more attractive.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item'>
                <Link to='/en/determining-the-final-project'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgFinalprojectcover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Determining The Final Project</span></p>
                      <p>Are you having trouble deciding your final assignment? This free media guide will help you pick the right topic based on what you're passionate about.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>
          
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default StepbyStepforBecomingaProfessional;
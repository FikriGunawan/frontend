import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import './Footer.css';
import imgGotop from '../../../assets/images/gotop.png';
import imgGotopmobile from '../../../assets/images/gotopmobile.png';
import imgLogo from '../../../assets/images/logo.png';
import imgSocialTwitter from '../../../assets/images/socialTwitter.png';
import imgSocialFB from '../../../assets/images/socialFB.png';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_nnr4tu9',
    'template_uoymaga',
    e.target,
    'user_MlLNxrp3PV3vyrlG5uG5C'
    ).then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}

const Footer = () => {

  return (
    <>
      {/* Footer */}
      <footer className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 pt-m-20p px-m-10p secSubscribe bgYellow'>
            <h6>Subscribe to Our Newsletter For</h6>
            <h4>Be the First to know about OMP!</h4>
            <form onSubmit={sendEmail}>
              <div className='form-row'>
                <div className='form-group col-lg-4'>
                  <label><b>Your name here:</b></label>
                  <input type='text' name='your-name' className='form-control' />
                </div>
                <div className='form-group col-lg-4'>
                  <label><b>Your e-mail:</b></label>
                  <input type='email' name='your-email' className='form-control' />
                </div>
                <div className='form-group col-lg-4'><input type='submit' className='btnBlack' value='Send'></input></div>
              </div>
            </form>
            <a className='gotop' href=''>
              <img className='img-fluid d-none d-lg-block' src={imgGotop} alt='Okular Mentorship Program' />
              <img className='img-fluid d-block d-lg-none' src={imgGotopmobile} alt='Okular Mentorship Program' />
            </a>
          </div>
          <div className='col-lg-12 secFooter'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-3 p-m-0 pl-lg-0'>
                  <a href='/en/home'>
                    <img className='img-fluid logo' src={imgLogo} alt='Okular Mentorship Program' />
                  </a>
                  <div className='social'>
                    <a href=''>
                      <img className='img-fluid' src={imgSocialTwitter} alt='Okular Mentorship Program' />
                    </a>
                    <a href=''>
                      <img className='img-fluid' src={imgSocialFB} alt='Okular Mentorship Program' />
                    </a>
                  </div>
                </div>
                <div className='col-12 col-lg-3 p-m-0'>
                  <div className='wrapCol01'>
                    <h6>Studio</h6>
                    <p>
                      Perkantoran Aries Niaga<br />
                      Taman Aries Blok E1/5C<br />
                      Meruya Utara, Jakarta Barat Indonesia 11520
                    </p>
                  </div>
                </div>
                <div className='col-12 col-lg-2 p-m-0 secFooterOH'>
                  <h6>Operational Hour</h6>
                  <p>
                    Monday - Friday<br />
                    09.00 AM - 05.00 PM
                  </p>
                  <hr />
                </div>
                <div className='col-12 col-lg-4 p-m-0'>
                  <div className='wrapCol02'>
                    <h6>Disclaimer</h6>
                    <p>Some of the images on the portfolio were purchased or provided by the client. Images are used for illustration purposes only and are not intended to be reproduced.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12 secCopyright text-center bgBlack'><p>© 2020 PT Okular Kreasi Artaguna. All Rights Reserved</p></div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
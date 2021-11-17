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
            <h6>Berlangganan Newsletter Kita Untuk</h6>
            <h4>Jadi yang Pertama tahu tentang OMP!</h4>
            <form onSubmit={sendEmail}>
              <div className='form-row'>
                <div className='form-group col-lg-4'>
                  <label><b>Nama kalian disini:</b></label>
                  <input type='text' name='your-name' className='form-control' />
                </div>
                <div className='form-group col-lg-4'>
                  <label><b>Email kalian:</b></label>
                  <input type='email' name='your-email' className='form-control' />
                </div>
                <div className='form-group col-lg-4'><input type='submit' className='btnBlack' value='Kirim'></input></div>
              </div>
            </form>
            <Link className='gotop' to=''>
              <img className='img-fluid d-none d-lg-block' src={imgGotop} alt='Okular Mentorship Program' />
              <img className='img-fluid d-block d-lg-none' src={imgGotopmobile} alt='Okular Mentorship Program' />
            </Link>
          </div>
          <div className='col-lg-12 secFooter'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-3 p-m-0 pl-lg-0'>
                  <Link to='/'>
                    <img className='img-fluid logo' src={imgLogo} alt='Okular Mentorship Program' />
                  </Link>
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
                  <h6>Jam Operasional</h6>
                  <p>
                    Senin - Jumat<br />
                    09.00 AM - 05.00 PM
                  </p>
                  <hr />
                </div>
                <div className='col-12 col-lg-4 p-m-0'>
                  <div className='wrapCol02'>
                    <h6>Sangkalan</h6>
                    <p>Beberapa gambar pada portofolio dibeli atau diberikan oleh klien. Gambar digunakan untuk tujuan ilustrasi saja dan tidak dimaksudkan untuk direproduksi.</p>
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
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
import imgBuildingyourresumeheader from '../../assets/images/resources/building-your-resume-header.jpg';
import imgBuildingyourresumeheadermobile from '../../assets/images/resources/building-your-resume-header-mobile.jpg';
import imgArrowDown from '../../assets/images/arrowDown.png';
import imgBuildingyourresumeimage from '../../assets/images/resources/building-your-resume-image.png';
import imgBuildingyourresumeornament from '../../assets/images/resources/building-your-resume-ornament.png';
import imgBuildingyourresumeornamentmobile from '../../assets/images/resources/building-your-resume-ornament-mobile.png';
import imgStepbystepcover from '../../assets/images/resources/step-by-step-cover.png';
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
      window.location.href = 'http://ompfe.okular.co.id/static/media/OMP-Building-Your-Resume.712548be.pdf';
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


const BuildingYourResume = () => {
  
  return (
    <>
      {/* Navbar */}
      <Navbar
        langID='/id/building-your-resume'
        langEN='/en/building-your-resume'
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
                Building<br />
                Your Resume
              </h1>
            </div>				
            <img className='img-fluid background d-none d-lg-block' src={imgBuildingyourresumeheader} alt='Okular Mentorship Program' />
            <img className='img-fluid background d-block d-lg-none' src={imgBuildingyourresumeheadermobile} alt='Okular Mentorship Program' />
            <a id='godown' href='#resourceDetailForm'>
              <img src={imgArrowDown} />
            </a>
          </div>

          {/* Form */}
          <div id='resourceDetailForm' className='col-lg-4 py-m-0 py-lg-10p px-m-0 px-lg-5p resourcesDetailForm'>
            <img className='img-fluid d-none d-lg-block' src={imgBuildingyourresumeimage} alt='Okular Mentorship Program' />
            <img className='img-fluid ornament d-none d-lg-block' src={imgBuildingyourresumeornament} alt='Okular Mentorship Program' />
          </div>
          <div className='col-lg-8 py-m-20p py-lg-10p px-m-10p px-lg-5p resourcesDetailForm'>
            <div className='wrap'>
              <h6>Building Your Resume</h6>
              <p>Tidak tahu darimana memulai sebuah resume? Panduan ini akan membantu kalian membuat resume dari awal.</p>
            </div>
            <img className='img-fluid d-block d-lg-none' src={imgBuildingyourresumeimage} alt='Okular Mentorship Program' />
            <form onSubmit={sendEmail}>
              <input type='hidden' name='your-resources' className='form-control' value='Building Your Resume'/>
              <div className='form-row'>
                <div className='form-group col-lg-6 pr-lg-5p'>
                  <label>Nama kalian disini:</label>
                  <input type='text' name='your-name' className='form-control' />
                  </div>
                <div className='form-group col-lg-6'>
                  <label>Email kalian:</label>
                  <input type='email' name='your-email' className='form-control' />
                  </div>
                <div className='form-group col-lg-6 pr-lg-5p'>
                  <label>Nomor kalian:</label>
                  <input type='number' name='your-phone' className='form-control' />
                  </div>
                <div className='form-group col-lg-6'>
                  <label>Bolehkan kita mengirim Email ke kalian?</label>
                  <select name='your-subject' className='form-control'>
                      <option value='Ya' selected>Ya</option>
                      <option value='Tidak Terimakasih'>Tidak Terimakasih</option>
                  </select>
                </div>
              </div>
              <div className='disclaimer'>
                <p><b>Disclaimer:</b> Kita akan menggunakan informasi yang kalian berikan di pendaftaran ini untuk tetap berhubungan, mengirim kalian pembaruan, dan mengirim email pemasaran tentang produk dan layanan kita. Kalian dapat berhenti berlangganan kapan saja melalui tautan di footer email dari kita. Untuk informasi lebih lanjut, silakan baca Kebijakan Privasi kita.</p>
              </div>
              <input type='submit' className='btnBlack' value='Unduh'></input>
            </form>
          </div>
          <div className='col-12 pb-m-20p px-m-0 resourcesDetailForm d-inline-block d-lg-none'>
            <img className='img-fluid ornament' src={imgBuildingyourresumeornamentmobile} alt='Okular Mentorship Program' />
          </div>

          {/* Other */}
          <div className='col-lg-12 resourcesDetailOther'>
            <div className='compBrief text-center'>
              <h6>Unduh Juga</h6>
              <h3>Yang Lainnya</h3>
            </div>
            <OwlCarousel className='carouselResourcesDetailOther owl-theme pt-lg-5p' {...optionCarouselResourcesDetailOther}>
              <div className='item'>
                <Link to='/id/step-by-step-for-becoming-a-professional'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgStepbystepcover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>STEP BY STEP FOR BECOMING A PROFESSIONAL</span></p>
                      <p>Kalian lulusan baru? Atau mungkin kalian masih mencari pekerjaan, tapi bingung mau mulai dari mana? Template ini akan membantu kalian melewatinya!</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item'>
                <Link to='/id/logo-design-proposal-template'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgLogodesignproposaltemplatecover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Logo Design Proposal</span></p>
                      <p>Apakah kalian membutuhkan tips untuk mempersiapkan proposal untuk desain logo kalian? Media panduan gratis ini akan memberikan kalian komposisi konten yang dapat dimasukan ke dalam proposal kalian.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item'>
                <Link to='/id/website-design-proposal-template'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgWebsitedesignproposaltemplatecover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Website Design Proposal Template</span></p>
                      <p>Apakah kalian memiliki cukup detail dalam proposal desain website kalian? Kita menyediakan struktur yang akan memperkuat proposal untuk proyek desain website kalian.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item'>
                <Link to='/id/creating-your-ultimate-portfolio'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgPortfoliocover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Creating Your Ultimate Portfolio</span></p>
                      <p>Apakah kalian yakin dengan portofolio kalian? Dengan panduan ini, kita akan memberi kalian tips tentang bagaimana membuat portofolio kalian lebih menarik.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item'>
                <Link to='/id/determining-the-final-project'>
                  <div className='compCard'>
                    <div className='images cursorHoverImg'>
                      <img className='img-fluid boxc' src={imgFinalprojectcover} alt='Okular Mentorship Program' />
                    </div>
                    <div className='wrap'>
                      <p><span>Determining The Final Project</span></p>
                      <p>Apakah kalian kesulitan menentukan tugas akhir? Panduan media gratis ini akan membantu kalian menentukan topik yang tepat berdasarkan apa yang kalian sukai.</p>
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

export default BuildingYourResume;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../App.css';
import { Markup } from 'interweave';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import imgStepbystepheader from '../../assets/images/resources/step-by-step-header.jpg';
import imgStepbystepheadermobile from '../../assets/images/resources/step-by-step-header-mobile.jpg';
import imgArrowDown from '../../assets/images/arrowDown.png';
import imgStepbystepimages from '../../assets/images/resources/step-by-step-images.png';
import imgStepbystepornament from '../../assets/images/resources/step-by-step-ornament.png';
import imgStepbystepornamentmobile from '../../assets/images/resources/step-by-step-ornament-mobile.png';
import imgStepbystepcover from '../../assets/images/resources/step-by-step-cover.png';
import imgBuildingyourresumecover from '../../assets/images/resources/building-your-resume-cover.png';
import imgLogodesignproposaltemplatecover from '../../assets/images/resources/logo-design-proposal-template-cover.png';
import imgWebsitedesignproposaltemplatecover from '../../assets/images/resources/website-design-proposal-template-cover.png';
import imgPortfoliocover from '../../assets/images/resources/portfolio-cover.png';
import imgFinalprojectcover from '../../assets/images/resources/final-project-cover.png';
import fetch from 'isomorphic-fetch';

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


class SingleResources extends React.Component{

  constructor(){
    super()
    this.state={
      SingleResources: [],
      Header_Image: '',
      Header_Image_Mobile: '',
      Form_Image: '',
      Ornament: '',
      Ornament_Mobile: '',
      Ebrochure: ''
    }
  }
  
  componentDidMount(){
    fetch(`http://ompcms.okular.co.id/resources/${this.props.match.params.postid}`).then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((resources) => {
      this.setState({SingleResources: resources});
      this.setState({Header_Image: resources.Header_Image.url});
      this.setState({Header_Image_Mobile: resources.Header_Image_Mobile.url});
      this.setState({Form_Image: resources.Form_Image.url});
      this.setState({Ornament: resources.Ornament.url});
      this.setState({Ornament_Mobile: resources.Ornament_Mobile.url});
      this.setState({Ebrochure: resources.Ebrochure.url});
    })
  }
  
  render(){
    const {id, Nav_Link_ID, Title, Header_Title, Form_Brief, Form_Disclaimer, Other_Sub_Title, Other_Title} = this.state.SingleResources;
    const dlink = `http://ompcms.okular.co.id${this.state.Ebrochure}`;

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
          console.log(dlink);
          window.location.href = dlink;
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return (
      <>
        {/* Navbar */}
        <Navbar
          langID={`/id/resources/${Nav_Link_ID}`}
          langEN={`/en/resources/${id}`}
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
                <Markup tagName='h1' content={Header_Title} />
              </div>
              <img className='img-fluid background d-none d-lg-block' src={`http://ompcms.okular.co.id${this.state.Header_Image}`} alt='Okular Mentorship Program' />
              <img className='img-fluid background d-block d-lg-none' src={`http://ompcms.okular.co.id${this.state.Header_Image_Mobile}`} alt='Okular Mentorship Program' />
              <a id='godown' href='#resourceDetailForm'>
                <img src={imgArrowDown} />
              </a>
            </div>

            {/* Form */}
            <div id='resourceDetailForm' className='col-lg-4 py-m-0 py-lg-10p px-m-0 px-lg-5p resourcesDetailForm'>
              <img className='img-fluid d-none d-lg-block' src={`http://ompcms.okular.co.id${this.state.Form_Image}`} alt='Okular Mentorship Program' />
              <img className='img-fluid ornament d-none d-lg-block' src={`http://ompcms.okular.co.id${this.state.Ornament}`} alt='Okular Mentorship Program' />
            </div>
            <div className='col-lg-8 py-m-20p py-lg-10p px-m-10p px-lg-5p resourcesDetailForm'>
              <div className='wrap'>
                <Markup tagName='h6' content={Title} />
                <Markup tagName='div' content={Form_Brief} />
              </div>
              <img className='img-fluid d-block d-lg-none' src={imgStepbystepimages} alt='Okular Mentorship Program' />
              <form onSubmit={sendEmail}>
                <input type='hidden' name='your-resources' className='form-control' value={Title}/>
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
                  <p><b>Disclaimer:</b> {Form_Disclaimer}</p>
                </div>
                <input type='submit' className='btnBlack' value='Unduh'></input>
              </form>
            </div>
            <div className='col-12 pb-m-20p px-m-0 resourcesDetailForm d-inline-block d-lg-none'>
              <img className='img-fluid ornament' src={`http://ompcms.okular.co.id${this.state.Ornament_Mobile}`} alt='Okular Mentorship Program' />
            </div>

            {/* Other */}
            <div className='col-lg-12 resourcesDetailOther'>
              <div className='compBrief text-center'>
                <h6>{Other_Sub_Title}</h6>
                <h3>{Other_Title}</h3>
              </div>
              <OwlCarousel className='carouselResourcesDetailOther owl-theme pt-lg-5p' {...optionCarouselResourcesDetailOther}>
                <div className='item'>
                  <a href='/en/resources/2'>
                    <div className='compCard'>
                      <div className='images cursorHoverImg'>
                        <img className='img-fluid boxc' src={imgStepbystepcover} alt='Okular Mentorship Program' />
                      </div>
                      <div className='wrap'>
                        <p><span>Step by Step for Becoming a Professional</span></p>
                        <p>Kalian lulusan baru? Atau mungkin kalian masih mencari pekerjaan, tapi bingung mau mulai dari mana? Template ini akan membantu kalian melewatinya!</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='/en/resources/4'>
                    <div className='compCard'>
                      <div className='images cursorHoverImg'>
                        <img className='img-fluid boxc' src={imgBuildingyourresumecover} alt='Okular Mentorship Program' />
                      </div>
                      <div className='wrap'>
                        <p><span>Building your resume</span></p>
                        <p>Tidak tahu darimana memulai sebuah resume? Panduan ini akan membantu kalian membuat resume dari awal.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='/en/resources/6'>
                    <div className='compCard'>
                      <div className='images cursorHoverImg'>
                        <img className='img-fluid boxc' src={imgLogodesignproposaltemplatecover} alt='Okular Mentorship Program' />
                      </div>
                      <div className='wrap'>
                        <p><span>Logo Design Proposal</span></p>
                        <p>Apakah kalian membutuhkan tips untuk mempersiapkan proposal untuk desain logo kalian? Media panduan gratis ini akan memberikan kalian komposisi konten yang dapat dimasukan ke dalam proposal kalian.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='/en/resources/8'>
                    <div className='compCard'>
                      <div className='images cursorHoverImg'>
                        <img className='img-fluid boxc' src={imgWebsitedesignproposaltemplatecover} alt='Okular Mentorship Program' />
                      </div>
                      <div className='wrap'>
                        <p><span>Website Design Proposal Template</span></p>
                        <p>Apakah kalian memiliki cukup detail dalam proposal desain website kalian? Kita menyediakan struktur yang akan memperkuat proposal untuk proyek desain website kalian.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='/en/resources/10'>
                    <div className='compCard'>
                      <div className='images cursorHoverImg'>
                        <img className='img-fluid boxc' src={imgPortfoliocover} alt='Okular Mentorship Program' />
                      </div>
                      <div className='wrap'>
                        <p><span>Creating Your Ultimate Portfolio</span></p>
                        <p>Apakah kalian yakin dengan portofolio kalian? Dengan panduan ini, kita akan memberi kalian tips tentang bagaimana membuat portofolio kalian lebih menarik.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='/en/resources/12'>
                    <div className='compCard'>
                      <div className='images cursorHoverImg'>
                        <img className='img-fluid boxc' src={imgFinalprojectcover} alt='Okular Mentorship Program' />
                      </div>
                      <div className='wrap'>
                        <p><span>Determining The Final Project</span></p>
                        <p>Apakah kalian kesulitan menentukan tugas akhir? Panduan media gratis ini akan membantu kalian menentukan topik yang tepat berdasarkan apa yang kalian sukai.</p>
                      </div>
                    </div>
                  </a>
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
}

export default SingleResources;
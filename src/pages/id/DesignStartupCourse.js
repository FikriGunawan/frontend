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
import imgClassHeader02 from '../../assets/images/class/classHeader02.png';
import imgClassHeaderMobile02 from '../../assets/images/class/classHeaderMobile02.png';
import imgArrowDownBlack from '../../assets/images/arrowDownBlack.png';
import imgClassBrief02 from '../../assets/images/class/classBrief02.png';
import imgClassBriefMobile02 from '../../assets/images/class/classBriefMobile02.png';
import imgOrnament02 from '../../assets/images/class/ornament02.png';
import imgPoint from '../../assets/images/point.png';
import imgOrnament01 from '../../assets/images/class/ornament01.png';
import imgOrnament04 from '../../assets/images/class/ornament04.png';
import imgOrnament03 from '../../assets/images/class/ornament03.png';
import imgOrnament05 from '../../assets/images/class/ornament05.png';
import imgOrnamentMobile05 from '../../assets/images/class/ornamentMobile05.png';
import imgOrnament08 from '../../assets/images/class/ornament08.png';
import imgQuizIcon01 from '../../assets/images/quiz/quizIcon01.png';
import imgQuizIcon03 from '../../assets/images/quiz/quizIcon03.png';
import fetch from 'isomorphic-fetch';
import { Markup } from 'interweave';

// Form
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_nrahqtc',
    'template_bvoiqmy',
    e.target,
    'user_QeYBUvMrn4YDyhlc0nyP5'
    ).then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}

// Owl Carousel Settings
const optionCarouselCaPInterested = {
  stagePadding: 50,
	margin: 10,
	responsiveClass: true,
	autoplay: true,
	loop: true,
	nav: false,
	dots: false,
	left: -30,
  navText: [
		"<img src='https://okularmentorshipprogram.netlify.app/assets/images/arrowLeft.png'>",
		"<img src='https://okularmentorshipprogram.netlify.app/assets/images/arrowRight.png'>"
	],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	},
};


class DesignStartupCourse extends React.Component{

  constructor(){
    super()
    this.state={
      DSCPage: [],
      Header_Image: '',
      Header_Image_Mobile: '',
      Brief_Image: '',
      Brief_Image_Mobile: '',
      Register_Image: '',
      Register_Image_Mobile: '',
      Category_Item1_Icon: '',
      Category_Item2_Icon: ''
    }
  }
  
  componentDidMount(){
    fetch(`http://ompcms.okular.co.id/design-startup-course?_locale=id`).then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((DSC) => {
      this.setState({DSCPage: DSC});
      this.setState({Header_Image: DSC.Header_Image.url});
      this.setState({Header_Image_Mobile: DSC.Header_Image_Mobile.url});
      this.setState({Brief_Image: DSC.Brief_Image.url});
      this.setState({Brief_Image_Mobile: DSC.Brief_Image_Mobile.url});
      this.setState({Register_Image: DSC.Register_Image.url});
      this.setState({Register_Image_Mobile: DSC.Register_Image_Mobile.url});
      this.setState({Category_Item1_Icon: DSC.Category_Item1_Icon.url});
      this.setState({Category_Item2_Icon: DSC.Category_Item2_Icon.url});
    })
  }
  
  render(){
    const {
      Brief_Sub_Title,
      Brief_Title,
      Brief_Desc,
      Detail_Sub_Title,
      Detail_Title,
      Detail_Price,
      Detail_Point,
      Interested_Sub_Title,
      Interested_Title,
      Interested_Point,
      Register_Sub_Title,
      Register_Title,
      Form_Title1,
      Form_Title2,
      Form_Title3,
      Form_Title4,
      Form_Title4_Field1,
      Form_Title4_Field2,
      Form_Title5,
      Form_Title5_Day1,
      Form_Title5_Day2,
      Form_Title5_Day3,
      Form_Title5_Day4,
      Form_Title5_Day5,
      Form_Title5_Day6,
      Form_Title5_Time1,
      Form_Title5_Time2,
      Form_Title5_Time3,
      Form_Title5_Time4,
      Form_Title5_Time5,
      Form_Note,
      Form_Title6,
      Form_Button,
      Category_Sub_Title,
      Category_Title,
      Category_Item1_Title,
      Category_Item1_Link,
      Category_Item2_Title,
      Category_Item2_Link
    } = this.state.DSCPage;  
    return (
      <>
        {/* Navbar */}
        <Navbar
          langID='/id/design-startup-course'
          langEN='/en/design-startup-course'
        />

        {/* Main */}
        <div className='cursorHover'>
          <p className='text'>See More</p>
        </div>
        <div id='mainCaP' className='container-fluid overflow-hidden'>
          <div className='row'>

            {/* Header */}
            <div className='col-lg-12 p-0 compHeader'>
              <img className='img-fluid background d-none d-lg-block moveTop' src={`http://ompcms.okular.co.id${this.state.Header_Image}`} alt='Okular Mentorship Program' />
              <img className='img-fluid background d-block d-lg-none' src={`http://ompcms.okular.co.id${this.state.Header_Image_Mobile}`} alt='Okular Mentorship Program' />
              <div className='moveDownHeader moveReWiHeader moveReHeHeader boxc'>
                <div className='circle boxc'></div>
              </div>
              <a id='godown' className='moveTop' href='#CaPBrief'>
                <img src={imgArrowDownBlack} />
              </a>
            </div>

            {/* Brief */}
            <div id='CaPBrief' className='col-lg-6 py-lg-10p px-lg-0 CaPBrief d-none d-lg-inline-block'>
              <img className='img-fluid image' src={`http://ompcms.okular.co.id${this.state.Brief_Image}`} alt='Okular Mentorship Program' />
            </div>
            <div className='col-lg-6 pt-m-20p py-lg-10p px-m-10p pl-lg-0 pr-lg-5p CaPBrief'>
              <div className='compBrief'>
                <Markup tagName='h6' content={Brief_Sub_Title} />
                <Markup tagName='h3' content={Brief_Title} />
                <div className='wrap'>
                  <Markup tagName='div' content={Brief_Desc} />
                </div>
              </div>
            </div>
            <div className='col-12 pb-m-10p px-0 CaPBrief d-block d-lg-none'>
              <img className='img-fluid image' src={`http://ompcms.okular.co.id${this.state.Brief_Image_Mobile}`} alt='Okular Mentorship Program' />
            </div>

            {/* Detail */}
            <div className='col-lg-5 py-lg-10p px-m-10p px-lg-5p CaPDetail bgYellow'>
              <div className='compBrief boxc'>
                <Markup tagName='h6' content={Detail_Sub_Title} />
                <Markup tagName='h3' content={Detail_Title} />
                <a className='btnRed'><Markup tagName='span' content={Detail_Price} /></a>
              </div>
            </div>
            <div className='col-lg-7 pt-m-0 py-lg-10p px-m-10p px-lg-0 CaPDetail bgYellow'>
              <div>
                <img className='img-fluid image w-lg-100p d-none d-lg-block' src={imgOrnament02} alt='Okular Mentorship Program' />
                <div className='pointWrap boxc'>
                  <div className='container-fluid boxc'>
                    <div className='row'>
                      <div className='col-lg-6 item'>
                        <img className='img-fluid icon' src={imgPoint} alt='Okular Mentorship Program' />
                        <p>Bagaimana menentukan harga</p>
                      </div>
                      <div className='col-lg-6 item'>
                        <img className='img-fluid icon' src={imgPoint} alt='Okular Mentorship Program' />
                        <p>Cara mendapatkan klien</p>
                      </div>
                      <div className='col-lg-6 item'>
                        <img className='img-fluid icon' src={imgPoint} alt='Okular Mentorship Program' />
                        <p>Cara untuk prospek klien</p>
                      </div>
                      <div className='col-lg-6 item'>
                        <img className='img-fluid icon' src={imgPoint} alt='Okular Mentorship Program' />
                        <p>Bagaimana mempersiapkan portfolio yang baik</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className='img-fluid ornament boxc d-none d-lg-block' src={imgOrnament01} alt='Okular Mentorship Program' />
            </div>

            {/* Interested */}
            <div className='col-lg-12 pb-m-20p py-lg-10p px-m-0 px-lg-0 CaPInterested bgLightGrey text-center'>
              <div className='compBrief'>
                <Markup tagName='h6' content={Interested_Sub_Title} />
                <Markup tagName='h3' content={Interested_Title} />
              </div>
              <img className='img-fluid ornament w-lg-100p' src={imgOrnament04} alt='Okular Mentorship Program' />
              <OwlCarousel className='carouselCaPInterested owl-theme d-block d-lg-none' data-aos='fade-up' data-aos-duration='1300' {...optionCarouselCaPInterested}>
                <div className='item'>
                  <img className='img-fluid icon' src={imgOrnament03} alt='Okular Mentorship Program' />
                  <div className='desc boxc'>
                    <p className='boxc'><b>sedang bersiap untuk memulai</b></p>
                  </div>
                </div>
                <div className='item'>
                  <img className='img-fluid icon' src={imgOrnament03} alt='Okular Mentorship Program' />
                  <div className='desc boxc'>
                    <p className='boxc'><b>berminat menjadi freelancer</b></p>
                  </div>
                </div>
              </OwlCarousel>
              <div className='container-fluid content d-none d-lg-block'>
                <div className='row'>
                  <div className='col-lg-3'></div>
                  <div className='col-lg-3'>
                    <img className='img-fluid icon' src={imgOrnament03} alt='Okular Mentorship Program' />
                    <div className='desc boxc'>
                      <p className='boxc'><b>sedang bersiap untuk memulai</b></p>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <img className='img-fluid icon' src={imgOrnament03} alt='Okular Mentorship Program' />
                    <div className='desc boxc'>
                      <p className='boxc'><b>berminat menjadi freelancer</b></p>
                    </div>
                  </div>
                  <div className='col-lg-3'></div>
                </div>
              </div>
            </div>

            {/* Register */}
            <div className='col-lg-6 pt-m-20p pb-m-0 pt-lg-5p pb-lg-10p px-m-0 pl-lg-0 pr-lg-5p CaPRegister bgLightGrey'>
              <div className='compBrief'>
                <Markup tagName='h6' content={Register_Sub_Title} />
                <Markup tagName='h3' content={Register_Title} />
              </div>
              <img className='img-fluid image d-none d-lg-block' src={`http://ompcms.okular.co.id${this.state.Register_Image}`} alt='Okular Mentorship Program' />
              <img className='img-fluid image d-block d-lg-none' src={`http://ompcms.okular.co.id${this.state.Register_Image_Mobile}`} alt='Okular Mentorship Program' />
            </div>
            <div className='col-lg-6 pt-m-0 pb-m-20p pt-lg-5p pb-lg-10p px-m-10p pr-lg-5p CaPRegister bgLightGrey'>
              <div>
                <form onSubmit={sendEmail}>
                  <input type='hidden' name='your-package' className='form-control' value='Design Startup Course'/>
                  <div className='form-row'>
                    <div className='form-group col-lg-6'>
                      <label>{Form_Title1}</label>
                      <input type='text' name='your-name' className='form-control' />
                    </div>
                    <div className='form-group col-lg-6'>
                      <label>{Form_Title2}</label>
                      <input type='email' name='your-email' className='form-control' />
                    </div>
                    <div className='form-group col-lg-6'>
                      <label>{Form_Title3}</label>
                      <input type='number' name='your-phone' className='form-control' />
                    </div>
                    <div className='form-group col-lg-6'>
                      <label>{Form_Title4}</label>
                      <select className='form-control' id='formSelect1'>
                        <option value='Ya' selected>{Form_Title4_Field1}</option>
                        <option value='Tidak'>{Form_Title4_Field2}</option>
                      </select>
                    </div>
                    <div className='form-group formCheckbox col-lg-12'>
                      <div className='w-lg-100p'>
                        <p>{Form_Title5} <img className='img-fluid required' src={imgOrnament08} alt='Okular Mentorship Program' /></p>
                      </div>
                      <div className='contentLeft'>
                        <input type='checkbox' id='day1' value='Senin' />
                        <label for='day1'>{Form_Title5_Day1}</label>
                        <input type='checkbox' id='day2' value='Selasa' />
                        <label for='day2'>{Form_Title5_Day2}</label>
                        <input type='checkbox' id='day3' value='Rabu' />
                        <label for='day3'>{Form_Title5_Day3}</label>
                        <input type='checkbox' id='day4' value='Kamis' />
                        <label for='day4'>{Form_Title5_Day4}</label>
                        <input type='checkbox' id='day5' value='Jumat' />
                        <label for='day5'>{Form_Title5_Day5}</label>
                        <input type='checkbox' id='day6' value='Sabtu' />
                        <label for='day6'>{Form_Title5_Day6}</label>
                      </div>
                      <div className='contentRight'>								
                        <input type='checkbox' id='time1' value='09:00 - 11:00' />
                        <label for='time1'>{Form_Title5_Time1}</label>
                        <input type='checkbox' id='time2' value='11:00 - 13:00' />
                        <label for='time2'>{Form_Title5_Time2}</label>
                        <input type='checkbox' id='time3' value='14:00 - 17:00' />
                        <label for='time3'>{Form_Title5_Time3}</label>
                        <input type='checkbox' id='time4' value='17:00 - 19:00' />
                        <label for='time4'>{Form_Title5_Time4}</label>
                        <input type='checkbox' id='time5' value='20:00 - 22:00' />
                        <label for='time5'>{Form_Title5_Time5}</label>
                      </div>
                      <p className='note'><img className='img-fluid required' src={imgOrnament08} alt='Okular Mentorship Program' /> {Form_Note}.</p>
                    </div>
                    <div className='form-group col-lg-12'>
                      <label>{Form_Title6}</label>
                      <input type='date' id='start' name='trip-start' value='2021-06-07' className='form-control' />
                    </div>
                    <div className='form-group col-lg-12'><input type='submit' className='btnBlack' value={Form_Button}></input></div>
                  </div>
                </form>
              </div>
            </div>

            {/* Section Classes and Packages */}
            <div className='col-lg-12 pt-lg-10p pb-lg-5p compCatCaP text-center bgWhite'>
              <div className='compBrief'>
                <Markup tagName='h6' content={Category_Sub_Title} />
                <Markup tagName='h3' content={Category_Title} />
              </div>
            </div>
            <div className='col-lg-12 pb-lg-10p compCatCaP text-center bgWhite'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <a className='cursorHoverImg' href={Category_Item1_Link}>
                      <img className='img-fluid image' src={`http://ompcms.okular.co.id${this.state.Category_Item1_Icon}`} alt='Okular Mentorship Program' />
                      <div className='circle'></div>
                      <p><b>{Category_Item1_Title}</b></p>
                    </a>
                  </div>
                  <div className='col-lg-6'>
                    <a className='cursorHoverImg' href={Category_Item2_Link}>
                      <img className='img-fluid image' src={`http://ompcms.okular.co.id${this.state.Category_Item2_Icon}`} alt='Okular Mentorship Program' />
                      <div className='circle'></div>
                      <p><b>{Category_Item2_Title}</b></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <Footer />
      </>
    )
  }
}

export default DesignStartupCourse;
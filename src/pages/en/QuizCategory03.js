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
import imgQuizImages05 from '../../assets/images/quiz/quizImages05.png';
import imgQuizImagesMobile05 from '../../assets/images/quiz/quizImagesMobile05.png';
import imgQuizLine from '../../assets/images/quiz/quizLine.png';
import imgQuizIcon03 from '../../assets/images/quiz/quizIcon03.png';
import imgQuizOrnamentMobile03 from '../../assets/images/quiz/quizOrnamentMobile03.png';
import imgQuizImages08 from '../../assets/images/quiz/quizImages08.png';
import imgQuizIcon01 from '../../assets/images/quiz/quizIcon01.png';
import imgQuizIcon02 from '../../assets/images/quiz/quizIcon02.png';
import fetch from 'isomorphic-fetch';
import { Markup } from 'interweave';


class QuizCategory03 extends React.Component{

  constructor(){
    super()
    this.state={
      QuizCategory03Page: [],
      Header_Image: '',
      Header_Image_Mobile: '',
      Header_Ornament: '',
      Header_Ornament_Mobile: '',
      Course_Image: '',
      Category_Item1_Icon: '',
      Category_Item2_Icon: ''
    }
  }
  
  componentDidMount(){
    fetch(`http://ompcms.okular.co.id/quiz-category-3?_locale=en`).then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((quizcat) => {
      this.setState({QuizCategory03Page: quizcat});
      this.setState({Header_Image: quizcat.Header_Image.url});
      this.setState({Header_Image_Mobile: quizcat.Header_Image_Mobile.url});
      this.setState({Header_Ornament: quizcat.Header_Ornament.url});
      this.setState({Header_Ornament_Mobile: quizcat.Header_Ornament_Mobile.url});
      this.setState({Course_Image: quizcat.Course_Image.url});
      this.setState({Category_Item1_Icon: quizcat.Category_Item1_Icon.url});
      this.setState({Category_Item2_Icon: quizcat.Category_Item2_Icon.url});
    })
  }
  
  render(){
    const {
      Header_Title,
      Header_Desc,
      Header_Button,
      Header_Link,
      Course_Title,
      Course_Desc,
      Course_Button,
      Course_Link,
      Category_Sub_Title,
      Category_Title,
      Category_Item1_Title,
      Category_Item1_Link,
      Category_Item2_Title,
      Category_Item2_Link
    } = this.state.QuizCategory03Page;
    return (
      <>
        {/* Navbar */}
        <Navbar
          langID='/id/quiz-category-03'
          langEN='/en/quiz-category-03'
        />

        {/* Main */}
        <div className='cursorHover'>
          <p className='text'>See More</p>
        </div>
        <div id='mainQuizCat' className='container-fluid'>
          <div className='row'>

            {/* Section Header */}
            <div className='col-lg-5 pt-lg-10p pb-lg-5p pl-lg-5p pr-lg-0 quizCatHeader d-none d-lg-inline-block'>
              <img className='img-fluid image' src={`http://ompcms.okular.co.id${this.state.Header_Image}`} alt='Okular Mentorship Program' />
            </div>
            <div className='col-lg-7 pt-lg-10p pb-lg-5p pl-lg-0 pr-lg-5p quizCatHeader padmob'>
              <div className='compBrief'>
                <Markup tagName='h2' content={Header_Title} />
                <img className='img-fluid image d-block d-lg-none' src={`http://ompcms.okular.co.id${this.state.Header_Image_Mobile}`} alt='Okular Mentorship Program' />
                <div className='wrap'>
                  <Markup tagName='div' content={Header_Desc} />
                  <a className='btnBlack' href={Header_Link}>{Header_Button}</a>
                </div>
              </div>
              <img className='img-fluid ornamentLine d-none d-lg-block' src={imgQuizLine} alt='Okular Mentorship Program' />
              <img className='img-fluid ornament d-none d-lg-block' src={`http://ompcms.okular.co.id${this.state.Header_Ornament}`} alt='Okular Mentorship Program' />
            </div>
            <div className='col-12 py-m-20p px-m-0 quizCatHeader bgLightGrey d-block d-lg-none'>
              <img className='img-fluid ornament' src={`http://ompcms.okular.co.id${this.state.Header_Ornament_Mobile}`} alt='Okular Mentorship Program' />
            </div>
            
            {/* Section Course */}
            <div className='col-lg-7 pt-m-0 pb-m-20p py-lg-10p px-m-10p pl-lg-10p pr-lg-0 quizCatCourse bgLightGrey'>
              <div className='compBrief'>
                <Markup tagName='h3' content={Course_Title} />
                <div className='wrap'>
                  <Markup tagName='div' content={Course_Desc} />
                  <a className='btnBlack' href={Course_Link}>{Course_Button}</a>
                </div>
              </div>
            </div>
            <div className='col-lg-5 py-lg-10p pl-lg-0 pr-lg-10p quizCatCourse bgLightGrey d-none d-lg-inline-block'>
              <img className='img-fluid image' src={`http://ompcms.okular.co.id${this.state.Course_Image}`} alt='Okular Mentorship Program' />
            </div>

            {/* Section Classes and Packages */}
            <div className='col-lg-12 pt-lg-10p pb-lg-5p compCatCaP text-center'>
              <div className='compBrief'>
                <Markup tagName='h6' content={Category_Sub_Title} />
                <Markup tagName='h3' content={Category_Title} />
              </div>
            </div>
            <div className='col-lg-12 pb-lg-10p compCatCaP text-center'>
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

export default QuizCategory03;
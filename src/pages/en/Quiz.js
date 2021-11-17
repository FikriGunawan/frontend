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
import imgQuizHeader01 from '../../assets/images/quiz/quizHeader01.png';
import imgQuizHeaderMobile01 from '../../assets/images/quiz/quizHeaderMobile01.png';
import imgArrowDownBlack from '../../assets/images/arrowDownBlack.png';
import imgQuizImagesMobile01 from '../../assets/images/quiz/quizImagesMobile01.png';
import imgQuizImages01 from '../../assets/images/quiz/quizImages01.png';
import fetch from 'isomorphic-fetch';
import { Markup } from 'interweave';

class Quiz extends React.Component{

  constructor(){
    super()
    this.state={
      QuizPage: [],
      Header_Image: '',
      Header_Image_Mobile: '',
      Brief_Image: '',
      Brief_Image_Mobile: ''
    }
  }
  
  componentDidMount(){
    fetch(`http://ompcms.okular.co.id/quiz?_locale=en`).then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((quiz) => {
      this.setState({QuizPage: quiz});
      this.setState({Header_Image: quiz.Header_Image.url});
      this.setState({Header_Image_Mobile: quiz.Header_Image_Mobile.url});
      this.setState({Brief_Image: quiz.Brief_Image.url});
      this.setState({Brief_Image_Mobile: quiz.Brief_Image_Mobile.url});
    })
  }
  
  render(){
    const {
      Brief_Sub_Title, 
      Brief_Title, 
      Brief_Desc, 
      Brief_Link, 
      Brief_Button
    } = this.state.QuizPage;
    return (
      <>
        {/* Navbar */}
        <Navbar
          langID='/id/quiz'
          langEN='/en/quiz'
        />

        {/* Main */}
        <div id='mainQuiz' className='container-fluid overflow-hidden'>
          <div className='row'>

            {/* Header */}
            <div className='col-lg-12 p-0 compHeader'>
              <img className='img-fluid background d-none d-lg-block moveTop' src={`http://ompcms.okular.co.id${this.state.Header_Image}`} alt='Okular Mentorship Program' />
              <img className='img-fluid background d-block d-lg-none' src={`http://ompcms.okular.co.id${this.state.Header_Image_Mobile}`} alt='Okular Mentorship Program' />
              <div className='moveDownHeader moveReWiHeader moveReHeHeader boxc'>
                <div className='circle boxc'></div>
              </div>
              <a id='godown' className='moveTop' href='#quizBrief'>
                <img src={imgArrowDownBlack} />
              </a>
            </div>

            {/* Brief */}
            <div id='quizBrief' className='col-lg-6 py-m-20p py-lg-10p pl-m-10p pr-m-0 px-lg-5p quizBrief'>
              <div className='compBrief wrap'>
                <div className='title'>
                  <Markup tagName='h6' content={Brief_Sub_Title} />
                  <Markup tagName='h3' content={Brief_Title} />
                </div>
                <img className='img-fluid d-block d-lg-none' src={`http://ompcms.okular.co.id${this.state.Brief_Image_Mobile}`} alt='Okular Mentorship Program' />
                <div className='brief'>
                  <Markup tagName='div' content={Brief_Desc} />
                  <a className='btnBlack' href={Brief_Link}>{Brief_Button}</a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 py-lg-10p pl-lg-0 pr-lg-5p quizBrief d-none d-lg-inline-block'>
              <img className='img-fluid' src={`http://ompcms.okular.co.id${this.state.Brief_Image}`} alt='Okular Mentorship Program' />
            </div>

          </div>
        </div>

        {/* Footer */}
        <Footer />
      </>
    )
  }
}

export default Quiz;
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
import imgnewHomeHeader from '../../assets/videos/newHomeHeader.mp4';
import imgnewHomeHeaderMobileGif from '../../assets/videos/newHomeHeaderMobile.gif';
import imgHomeImages02 from '../../assets/images/home/homeImages02.png';
import imgHomeImages01 from '../../assets/images/home/homeImages01.png';
import imgHomeImagesMobile01 from '../../assets/images/home/homeImagesMobile01.png';
import imgHomeImagesMobile03 from '../../assets/images/home/homeImagesMobile03.png';
import imgHomeImages03 from '../../assets/images/home/homeImages03.png';
import imgHomeImages04 from '../../assets/images/home/homeImages04.png';
import imgHomeImagesMobile04 from '../../assets/images/home/homeImagesMobile04.png';
import imgHomeImagesMentor1 from '../../assets/images/home/homeImages04-01.png';
import imgHomeImagesMentor2 from '../../assets/images/home/homeImages04-02.png';
import imgHomeImagesMentor3 from '../../assets/images/home/homeImagesMobile04-01.png';
import imgHomeImages05 from '../../assets/images/home/homeImages05.png';
import imgHomeImagesMobile06 from '../../assets/images/home/homeImagesMobile06.png';
import imgHomeImagesMobile07 from '../../assets/images/home/homeImagesMobile07.png';
import imgHomeImagesMobile08 from '../../assets/images/home/homeImagesMobile08.png';
import imgHomeImages06 from '../../assets/images/home/homeImages06.png';
import imgKlik from '../../assets/images/klik.png';
import imgKlik02 from '../../assets/images/klik02.png';
import imgKlik03 from '../../assets/images/klik03.png';
import imgHomeImages07 from '../../assets/images/home/homeImages07.png';
import imgHomeImages08 from '../../assets/images/home/homeImages08.png';
import imgHomeImagesMobile09 from '../../assets/images/home/homeImagesMobile09.png';
import imgHomeImages12 from '../../assets/images/home/homeImages12.png';
import imgStepbystepcover from '../../assets/images/resources/step-by-step-cover.png';
import imgHomeImages11 from '../../assets/images/home/homeImages11.png';
import imgBuildingyourresumecover from '../../assets/images/resources/building-your-resume-cover.png';
import imgLogodesignproposaltemplatecover from '../../assets/images/resources/logo-design-proposal-template-cover.png';
import imgWebsitedesignproposaltemplatecover from '../../assets/images/resources/website-design-proposal-template-cover.png';
import imgPortfoliocover from '../../assets/images/resources/portfolio-cover.png';
import imgFinalprojectcover from '../../assets/images/resources/final-project-cover.png';
import imgHomeImages09 from '../../assets/images/home/homeImages09.png';
import imgHomeImages10 from '../../assets/images/home/homeImages10.png';
import imgHomeImages13 from '../../assets/images/home/homeImages13.png';
import imgHomeTestimoni from '../../assets/images/home/homeTestimoni.jpg';
import imgHomeImages14 from '../../assets/images/home/homeImages14.png';
import homeMore01 from '../../assets/images/home/homeMore01.jpg';
import homeMore03 from '../../assets/images/home/homeMore03.png';
import homeMore02 from '../../assets/images/home/homeMore02.jpg';
import icoArrowLeft from '../../assets/images/arrowLeft.png';
import icoArrowRight from '../../assets/images/arrowRight.png';
import fetch from 'isomorphic-fetch';
import { Markup } from 'interweave';
// Form
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_nrahqtc',
    'template_81r7vpi',
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
const optionCarouselResources = {
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  nav: true,
	dots: true,
  navText: [
		"<img src='data:image/png;base64,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'>",
		"<img src='data:image/png;base64,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'>"
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
const optionCarouselStagePadding = {
  stagePadding: 30,
  margin: 0,
  responsiveClass: true,
  autoplay: false,
  loop: false,
  nav: true,
  dots: true,
  left: -30,
  navText: [
    "<img src='data:image/png;base64,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'>",
    "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABvCAYAAABSOrhSAAAACXBIWXMAABcRAAAXEQHKJvM/AAAH7UlEQVR4nNVdO48jRRCuXiD2LEKIAGlNghABZx4SRKwvheAMIQkmRUj4MiLk+wXsZUgg4YsQF3lFghACg4REgMQcfwBvgsgYh0SNavYrb3n8mpmu8bQ/aeTdPbs9NfV+dJ/z3tM+OOe63vs54Wciyrz32d4PRoY1YkHMkIj6RNRjwojojIgWRJQSUYLXufd+fFTUMrEgmIm8YCL4zzuuTP3bTD5/DJcQKtzaRWTxmjL3j4nYEzCYufobRLUsWMQHbUlkHThwlXXvJaKc+POK65wei7E6AYeY0Ns1CGXMnXPTBu7NHCfe+xkRvRK48DxC2tZw4pwb4Gar6KtGh3XeOTfGWvEC1vii4FLqXiMmPFZr7JTbOTPgyAIPju3AxHsflS4/RkTP4Ob+I6JviOiNgPV4jReI6BPv/XeG92mCPFx0zjFnbxmteQlJuYjNJQmxAwQWnxmsKTE0G71pTKKcR1C4oQRcuW+wLj+495FQxANtrWBcQi2yXCzCSVTWGESyKCcqOOgEcmOh1hKpyVpPCQucHYEjY3BnX7q3i6vLNBBX6/73pED7DPo2gv7WDQOLkpGhGNAuitRD5BIYF8lbQ6OrFOu0yuEiZwm+kYOMr4jo3hZOVYX48KnUstrAGrEA39AjiHRidF8sxolzrj13tIvtqETMVZBg5ZaGbYhxuTddi7UVsVKhPLjubhPjJZxzHGj8YZQVEfR33kr9qgRXpcQ6hFWeGVjnDNfkkByu9uZrwqeGuuuRHcUhxgUpmINgDgevAko5Gj3nHBft2FI3Gk5WIhaY4HVu4H8JFc0U684M1tuKx2t8RvStTtl1G+5wKReVzsZQh7NC7AMjMRYMIM65KHODDZmYGUq1LDcB3b5UpXB9I7G+h4c58t53LYmtI8YaEk7+ZXhPXRW5EcLLqUk9K9h3Xd9Y1Q5gGT88hrTMrXxxbTHWQK9HoiKLSOsSIeqPRPQLVGXgvZ+U+Ox2mEUnN/mv9cUP8Xci+vSgQUUJWFpnAUvKq0T0buhClsRmKOfcNVxTQ5pntd2Ric6uLHh9MzKbwUHCT6ZfQPQyHixBjy9K35s1sXRD8Ah6bJUaEtREioLzys0z8zTq5kbEuFhWOOSaIOiQ7yxVjLc2UHlmhMjnNl5NQz6AWysZBxxoypX7jqZzyAYCDn1Nq7RYzDm7ARMkDT83sHaeGqJ0tB9Nc3ZD0GExzlBchx9ob+89HJDYpGC8mhDpnsx1tSXGOZC1ZMpHknHEdUf59y7y4Z5+w8GIVWCRew41rMyY4HNV3pmsNeYOJcY79Ni6WskEZpuGSFsltiHDJdfaeHAbYlxEirlJ68mac+ccu6XR8i9tc9bfhJgTxNPWVnop0jFwluAunmyo/yOzld1YiOVa09Pwk5ew1JbgxvoktLpoAs5JuWYMo5IhuLdMDXNEQSzRcvBM6tH/grspdK4XOG6Yx+WxiLEGE/cOp4fe+wF+D52r5Ic1i4azAl0MR7j3sdLhuqKdR1IxcjYH/GOGWcqzQB3OZ6qjJVZ1+a06e1mUxKLDINviwroA18izrUaqi6GArn5ORK8bLbnw3idRctZ7zy7nH8Mleb14/KwqrqeNDWVHkASM8doPrENtu8aS7rXGWURKCeYZBzXHfct0+tPl2i1yVPYT9cGhJurLqS6+tWagECmlaHx1DLfayIwWFYe6DyrGzrm+Gs0v3X2rgSmM3GSlAtKC+E5VUcy6IsGv3xLRWxg6Wf3uFoidqSqgFYFidediCzZ998EiKOVHRYcSoy01pHaJyiC4HC+Rrry7YS4O0TAm6I+VyE6V9U7LTqY3baCGKGlar9uFhIyqbKFpzPU452Z46gs0j61wF2LLlQz2of3SAUmDIjySuQdDI+RDNlOYcxZD0rKv78yAqx2kews0tWuPLZjpLAgcQIdeI6K/DZa9Uhb8Te/9n0GrGYtuqsTOItadqrWDt6c24WpCo6NMZSqm+2+DdZbjXVwT+L/QSn4H6mC+MzOIWAw+f0REL6pO3IMakZGepFnA4vaknGKGQLHtQvRmgbqZqq2rg22xbdtiLI3eJLDzlqBFMUQJpVfiM5URSqxsWJjV7JzrtsYQHG3sbAsrPzuoSeyZOsSjUUJz1NDRvr8JB+vop0iBVBP2TqZZXZXzWTSKxUrWCQWv1EhQ75DbwiuJMWpItwKKY5cwRgOl7wdDVQM1rDmRJhW/qSI0OfRBO6XFWG1Hq1NK+ZqIvg/elxOIUpxFV20ccEgHY9zqSQb7dBZtCRG7ultIWYQfeu/fK06JHhwl07aqKZtO87JYznXbKcZIyKXNX8UCd5AQjEFoFEcVbhRjtStKdjouahimNLYD69Y4C716m4i+BFerFLMl1l3AzUSFTecbJ6oI3atomB7hAfVQ4owLW4xSyCjs+JDxroWBmoBL+8SVVEQlG/7XeyyRQJ/h1lV72Ef4uUw96YPCYFa055UvrTG7B3V0r+jrLiwtdCyuZR9WxBjlkIuSxzB0GtwY3AhWiEWuSoU5pKsN++g4VTtFEbvV4L4KikFFH/qnp8vOoMf3ESdPERUVd1/Fj4LLGavY9sNCqXOmN+ge47UUY1T0RxBZ1sfnYWkX6pCMQfSnU+/ASgSFfagDFSLK/vJTFNqi9J9lsSlc7IFIbY1/JaJncXrA0RK8lvUwMc65H4joKSL6goieEIuLwONosbUGhUoiF8WO4v8I2Asi+h+VCjazuxn5MgAAAABJRU5ErkJggg=='>"
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


class Home extends React.Component{

  constructor(){
    super()
    this.state={
      HomePage: [],
      Header_Video: '',
      Header_Video_Mobile: '',
      Test_Ornament: '',
      Test_Image: '',
      Test_Image_Mobile: '',
      About_Image: '',
      About_Image_Mobile: '',
      Mentor_Illustration: '',
      Mentor_Image: '',
      Mentor_Image_Mobile: '',
      Learn_Image: '',
      Class_Category_Icon_1: '',
      Class_Category_Icon_Mobile_1: '',
      Class_Category_Icon_2: '',
      Class_Category_Icon_Mobile_2: '',
      Class_Category_Icon_3: '',
      Class_Category_Icon_Mobile_3: '',
      Resources_Image_Mobile: '',
      Resources_Product_Image_1: '',
      Resources_Product_Image_2: '',
      Resources_Product_Image_3: '',
      Resources_Product_Image_4: '',
      Resources_Product_Image_5: '',
      Resources_Product_Image_6: '',
      Testimonial_Image: '',
      More_Left_Icon: '',
      More_Left_Post: '',
      More_Right_Image: ''
    }
  }
  
  componentDidMount(){
    fetch(`http://ompcms.okular.co.id/home?_locale=id`).then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((home) => {
      this.setState({HomePage: home});
      this.setState({Header_Video: home.Header_Video.url});
      this.setState({Header_Video_Mobile: home.Header_Video_Mobile.url});
      this.setState({Test_Ornament: home.Test_Ornament.url});
      this.setState({Test_Image: home.Test_Image.url});
      this.setState({Test_Image_Mobile: home.Test_Image_Mobile.url});
      this.setState({About_Image: home.About_Image.url});
      this.setState({About_Image_Mobile: home.About_Image_Mobile.url});
      this.setState({Mentor_Illustration: home.Mentor_Illustration.url});
      this.setState({Mentor_Image: home.Mentor_Image.url});
      this.setState({Mentor_Image_Mobile: home.Mentor_Image_Mobile.url});
      this.setState({Learn_Image: home.Learn_Image.url});
      this.setState({Class_Category_Icon_1: home.Class_Category_Icon_1.url});
      this.setState({Class_Category_Icon_Mobile_1: home.Class_Category_Icon_Mobile_1.url});
      this.setState({Class_Category_Icon_2: home.Class_Category_Icon_2.url});
      this.setState({Class_Category_Icon_Mobile_2: home.Class_Category_Icon_Mobile_2.url});
      this.setState({Class_Category_Icon_3: home.Class_Category_Icon_3.url});
      this.setState({Class_Category_Icon_Mobile_3: home.Class_Category_Icon_Mobile_3.url});
      this.setState({Resources_Image_Mobile: home.Resources_Image_Mobile.url});
      this.setState({Resources_Product_Image_1: home.Resources_Product_Image_1.url});
      this.setState({Resources_Product_Image_2: home.Resources_Product_Image_2.url});
      this.setState({Resources_Product_Image_3: home.Resources_Product_Image_3.url});
      this.setState({Resources_Product_Image_4: home.Resources_Product_Image_4.url});
      this.setState({Resources_Product_Image_5: home.Resources_Product_Image_5.url});
      this.setState({Resources_Product_Image_6: home.Resources_Product_Image_6.url});
      this.setState({Testimonial_Image: home.Testimonial_Image.url});
      this.setState({More_Left_Icon: home.More_Left_Icon.url});
      this.setState({More_Left_Post: home.More_Left_Post.url});
      this.setState({More_Right_Image: home.More_Right_Image.url});
    })
  }
  
  render(){
    const {
      Test_Sub_Title, 
      Test_Title, 
      Test_Desc, 
      Test_Link, 
      Test_Button,
      About_Sub_Title,
      About_Title,
      About_Desc,
      About_Link,
      About_Button,
      Mentor_Sub_Title,
      Mentor_Title,
      Mentor_Desc,
      Mentor_Link,
      Mentor_Button,
      Learn_Sub_Title,
      Learn_Title,
      Learn_Desc,
      Class_Sub_Title,
      Class_Title,
      Class_Category_Link_1,
      Class_Category_Title_1,
      Class_Category_Link_2,
      Class_Category_Title_2,
      Class_Category_Link_3,
      Class_Category_Title_3,
      Class_Category_Description_St_1,
      Class_Category_Description_Nd_1,
      Class_Category_Description_St_2,
      Class_Category_Description_Nd_2,
      Class_Category_Description_St_3,
      Class_Category_Description_Nd_3,
      Resources_Sub_Title,
      Resources_Title,
      Resources_Desc,
      Resources_Link,
      Resources_Button,
      Resources_Product_Link_1,
      Resources_Product_Link_2,
      Resources_Num_1,
      Resources_Product_Link_3,
      Resources_Product_Link_4,
      Resources_Num_2,
      Resources_Product_Link_5,
      Resources_Product_Link_6,
      Resources_Num_3,
      Contact_Embed,
      Contact_Sub_Title,
      Contact_Title,
      Contact_Form_Title1,
      Contact_Form_Title2,
      Contact_Form_Title3,
      Contact_Form_Title4,
      Contact_Form_Title4_Field1,
      Contact_Form_Title4_Field2,
      Contact_Form_Title5,
      Contact_Form_Button,
      Testimonial_Title,
      Testimonial_Desc,
      More_Left_Sub_Title,
      More_Left_Title,
      More_Left_Link,
      More_Left_Link_Title,
      More_Right_Link,
      More_Right_Sub_Title,
      More_Right_Title,
      More_Right_Embed,
      More_Mobile_Sub_Title,
      More_Mobile_Title,
      More_Mobile_Link_Title
    } = this.state.HomePage;
  
    return (
      <>
        {/* Navbar */}
        <Navbar
          langID='/'
          langEN='en/home'
        />

        {/* Main */}
        <div className='cursorHover'>
          <p className='text'>Detail</p>
        </div>
        <div className='cursorHover2'>
          <p className='text2'>Detail</p>
        </div>
        <div id='mainHome' className='container-fluid'>
          <div className='row'>
            
            {/* Header */}
            <div className='col-lg-12 p-0'>
              <img className="img-fluid d-none d-lg-block background" data-aos="fade-in" data-aos-duration="1000" src={`http://ompcms.okular.co.id${this.state.Header_Video}`} alt="Okular Mentorship Program" />
              <img className="img-fluid d-block d-lg-none background" data-aos="fade-in" data-aos-duration="1000" src={`http://ompcms.okular.co.id${this.state.Header_Video_Mobile}`} alt="Okular Mentorship Program" />
            </div>

            {/* Test */}
            <div className='col-lg-6 py-m-20p pt-lg-10p px-m-10p px-lg-5p homeTest'>
              <div className='compBrief d-block d-lg-none pb-m-5p'>
                <Markup tagName='h6' content={Test_Sub_Title} />
                <Markup tagName='h3' content={Test_Title} />
                <div className='wrap'>
                  <Markup tagName='div' content={Test_Desc} />
                </div>
              </div>
              <img className='img-fluid ornament d-none d-lg-block' data-aos='fade-up' data-aos-duration='1300' src={`http://ompcms.okular.co.id${this.state.Test_Ornament}`} alt='Okular Mentorship Program' />
              <img className='img-fluid image d-none d-lg-block' data-aos='fade-up' data-aos-duration='1300' src={`http://ompcms.okular.co.id${this.state.Test_Image}`} alt='Okular Mentorship Program' />
              <img className='img-fluid image d-block d-lg-none' data-aos='fade-up' data-aos-duration='1300' src={`http://ompcms.okular.co.id${this.state.Test_Image_Mobile}`} alt='Okular Mentorship Program' />
              <a className='btnBlack d-block d-lg-none' href={Test_Link}>{Test_Button}</a>
            </div>
            <div className='col-lg-6 pt-lg-10p pl-lg-0 pr-lg-5p d-none d-lg-inline-block homeTest'>
              <div className='compBrief' data-aos='fade-left' data-aos-duration='1300'>
                <Markup tagName='h6' content={Test_Sub_Title} />
                <Markup tagName='h3' content={Test_Title} />
                <div className='wrap'>
                  <Markup tagName='div' content={Test_Desc} />
                  <a className='btnBlack' href={Test_Link}>{Test_Button}</a>
                </div>
              </div>
            </div>

            {/* About */}
            <div className='col-lg-12 pt-m-20p pt-lg-10p pb-lg-5p px-m-10p homeAbout text-center bgYellow'>
              <div className='compBrief' data-aos='fade-down' data-aos-duration='1300'>
                <Markup tagName='h6' content={About_Sub_Title} />
                <Markup tagName='h3' content={About_Title} />
              </div>
              <img className='img-fluid ornament d-block d-lg-none' data-aos='fade-left' data-aos-duration='1300' src={`http://ompcms.okular.co.id${this.state.About_Image_Mobile}`} alt='Okular Mentorship Program' />
            </div>
            <div className='col-lg-5 pb-m-20p px-m-10p pb-lg-10p homeAbout bgYellow'>
              <div className='wrap' data-aos='fade-up' data-aos-duration='1300'>
                <Markup tagName='div' content={About_Desc} />
                <a className='btnBlack' target='_blank' href={About_Link}>{About_Button}</a>
              </div>
            </div>
            <div className='col-lg-7 pb-lg-10p pr-lg-0 homeAbout text-right bgYellow d-none d-lg-inline-block'>
              <img className='img-fluid w-lg-100p' data-aos='fade-left' data-aos-duration='1300' src={`http://ompcms.okular.co.id${this.state.About_Image}`} alt='Okular Mentorship Program' />
            </div>

            {/* Mentor */}
            <div className='col-lg-6 pb-lg-10p px-lg-5p homeMentor bgYellow d-none d-lg-inline-block'>
              <img class="img-fluid image imgIllus active" src={`http://ompcms.okular.co.id${this.state.Mentor_Illustration}`} alt="Okular Mentorship Program" />
              <img class="img-fluid image imgReal" src={`http://ompcms.okular.co.id${this.state.Mentor_Image}`} alt="Okular Mentorship Program" />
            </div>
            <div className='col-lg-6 py-m-20p pb-lg-10p px-m-10p pl-lg-0 pr-lg-5p homeMentor bgYellow'>
              <div className='compBrief' data-aos='fade-left' data-aos-duration='1300'>
                <Markup tagName='h6' content={Mentor_Sub_Title} />
                <Markup tagName='h3' content={Mentor_Title} />
                <img className='img-fluid image d-block d-lg-none' src={`http://ompcms.okular.co.id${this.state.Mentor_Image_Mobile}`} alt='Okular Mentorship Program' />
                <div className='wrap'>
                  <Markup tagName='div' content={Mentor_Desc} />
                  <a className='btnBlack' target='_blank' href={Mentor_Link}>{Mentor_Button}</a>
                </div>
              </div>
            </div>

            {/* Learn */}
            <div className='col-lg-12 py-m-20p px-m-10p py-lg-10p px-lg-5p homeLearn'>
              <div className='compBrief wrap' data-aos='fade-up' data-aos-duration='1300'>
                <Markup tagName='h6' content={Learn_Sub_Title} />
                <Markup tagName='h3' content={Learn_Title} />
                <Markup tagName='div' content={Learn_Desc} />
              </div>
              <img className='img-fluid' data-aos='fade-left' data-aos-duration='1300' src={`http://ompcms.okular.co.id${this.state.Learn_Image}`} alt='Okular Mentorship Program' />
            </div>

            {/* Classes and Packages */}
            <div className='col-lg-12 py-m-20p pt-lg-10p pb-lg-5p px-m-10p homeCaP text-center bgRed'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-12 p-0'>
                    <div className='compBrief' data-aos='fade-up' data-aos-duration='1300'>
                      <Markup tagName='h6' content={Class_Sub_Title} />
                      <Markup tagName='h3' content={Class_Title} />
                    </div>
                  </div>
                  <div className='col-6 p-0 d-inline-block d-lg-none item'>
                    <a href={Class_Category_Link_1}>
                      <img className='img-fluid' src={`http://ompcms.okular.co.id${this.state.Class_Category_Icon_Mobile_1}`} alt='Okular Mentorship Program' />
                    </a>
                  </div>
                  <div className='col-6 p-0 d-inline-block d-lg-none item'>
                    <a href={Class_Category_Link_1}>
                      <Markup tagName='h5' className='boxc' content={Class_Category_Title_1} />
                    </a>
                  </div>
                  <div className='col-6 p-0 d-inline-block d-lg-none item'>
                    <a href={Class_Category_Link_2}>
                      <img className='img-fluid' src={`http://ompcms.okular.co.id${this.state.Class_Category_Icon_Mobile_2}`} alt='Okular Mentorship Program' />
                    </a>
                  </div>
                  <div className='col-6 p-0 d-inline-block d-lg-none item'>
                    <a href={Class_Category_Link_2}>
                      <Markup tagName='h5' className='boxc' content={Class_Category_Title_2} />
                    </a>
                  </div>
                  <div className='col-6 p-0 d-inline-block d-lg-none item'>
                    <a href={Class_Category_Link_3}>
                      <img className='img-fluid' src={`http://ompcms.okular.co.id${this.state.Class_Category_Icon_Mobile_3}`} alt='Okular Mentorship Program' />
                    </a>
                  </div>
                  <div className='col-6 p-0 d-inline-block d-lg-none item'>
                    <a href={Class_Category_Link_3}>
                      <Markup tagName='h5' className='boxc' content={Class_Category_Title_3} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12 pb-lg-10p px-lg-5p homeCaP wrap text-center bgRed d-none d-lg-block'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-4 py-lg-5p px-lg-5p item homeCaPItem1 text-center bgRed'>
                    <a href={Class_Category_Link_1}>
                      <img className='img-fluid' src={`http://ompcms.okular.co.id${this.state.Class_Category_Icon_1}`} alt='Okular Mentorship Program' />
                      <Markup tagName='h5' content={Class_Category_Title_1} />
                      <div className='overlay'></div>
                      <div className='oval'></div>
                      <img className='info' src={imgKlik02} alt='Okular Mentorship Program' />
                    </a>
                  </div>
                  <div className='col-lg-4 py-lg-5p px-lg-5p item homeCaPItem2 text-center bgRed'>
                    <a href={Class_Category_Link_2}>
                      <img className='img-fluid' src={`http://ompcms.okular.co.id${this.state.Class_Category_Icon_2}`} alt='Okular Mentorship Program' />
                      <Markup tagName='h5' content={Class_Category_Title_2} />
                      <div className='overlay'></div>
                      <div className='oval'></div>
                      <img className='info' src={imgKlik02} alt='Okular Mentorship Program' />
                    </a>
                  </div>
                  <div className='col-lg-4 py-lg-5p px-lg-5p item homeCaPItem3 text-center bgRed'>
                    <a href={Class_Category_Link_3}>
                      <img className='img-fluid' src={`http://ompcms.okular.co.id${this.state.Class_Category_Icon_3}`} alt='Okular Mentorship Program' />
                      <Markup tagName='h5' content={Class_Category_Title_3} />
                      <div className='overlay'></div>
                      <div className='oval'></div>
                      <img className='info' src={imgKlik02} alt='Okular Mentorship Program' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='hcib homeCaPItem1Brief'>
                <div className='wrap'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <Markup tagName='div' content={Class_Category_Description_St_1} />
                      </div>
                      <div className='col-lg-6'>
                        <Markup tagName='div' content={Class_Category_Description_Nd_1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bgov'></div>
              </div>
              <div className='hcib homeCaPItem2Brief1'>
                <div className='wrap'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <Markup tagName='div' content={Class_Category_Description_St_2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bgov'></div>
              </div>
              <div className='hcib homeCaPItem2Brief2'>
                <div className='wrap'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <Markup tagName='div' content={Class_Category_Description_Nd_2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bgov'></div>
              </div>
              <div className='hcib homeCaPItem3Brief'>
                <div className='wrap'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <Markup tagName='div' content={Class_Category_Description_St_3} />
                      </div>
                      <div className='col-lg-6'>
                        <Markup tagName='div' content={Class_Category_Description_Nd_3} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bgov'></div>
              </div>
            </div>

            {/* Resource */}
            <div className='col-lg-12 py-m-20p py-lg-10p px-m-10p pl-lg-5p pr-lg-0 homeResources bgLightGrey'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-6 p-0 pl-lg-0'>
                    <div className='compBrief wrap' data-aos='fade-up' data-aos-duration='1300'>
                      <Markup tagName='h6' content={Resources_Sub_Title} />
                      <Markup tagName='h3' content={Resources_Title} />
                      <img className='img-fluid ornament d-block d-lg-none' data-aos='fade-left' data-aos-duration='1300' src={`http://ompcms.okular.co.id${this.state.Resources_Image_Mobile}`} alt='Okular Mentorship Program' />
                      <div className='brief'>
                        <Markup tagName='div' content={Resources_Desc} />
                        <a className='btnBlack' href={Resources_Link}>{Resources_Button}</a>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 pr-lg-0 d-none d-lg-inline-block'>
                    <OwlCarousel className='carouselResources owl-theme' data-aos='fade-left' data-aos-duration='1300' {...optionCarouselResources}>          
                      <div className='item'>
                        <div className='container-fluid'>
                          <div className='row'>
                            <div className='col-lg-6 pr-lg-0'>
                              <a className='cursorHoverImg' href={Resources_Product_Link_1}>
                                <img className='img-fluid background' src={imgHomeImages12} alt='Okular Mentorship Program' />
                                <img className='img-fluid boxc cover' src={`http://ompcms.okular.co.id${this.state.Resources_Product_Image_1}`} alt='Okular Mentorship Program' />
                              </a>
                            </div>
                            <div className='col-lg-6 pl-lg-0'>
                              <a className='cursorHoverImg' href={Resources_Product_Link_2}>
                                <img className='img-fluid background' src={imgHomeImages11} alt='Okular Mentorship Program' />
                                <img className='img-fluid boxc cover' src={`http://ompcms.okular.co.id${this.state.Resources_Product_Image_2}`} alt='Okular Mentorship Program' />
                              </a>
                            </div>
                            <div className='col-lg-12 p-0'>
                              <div className='space'></div>
                            </div>
                            <Markup tagName='span' className='num' content={Resources_Num_1} />
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='container-fluid'>
                          <div className='row'>
                            <div className='col-lg-6 pr-lg-0'>
                              <a className='cursorHoverImg' href={Resources_Product_Link_3}>
                                <img className='img-fluid background' src={imgHomeImages12} alt='Okular Mentorship Program' />
                                <img className='img-fluid boxc cover' src={`http://ompcms.okular.co.id${this.state.Resources_Product_Image_3}`} alt='Okular Mentorship Program' />
                              </a>
                            </div>
                            <div className='col-lg-6 pl-lg-0'>
                              <a className='cursorHoverImg' href={Resources_Product_Link_4}>
                                <img className='img-fluid background' src={imgHomeImages11} alt='Okular Mentorship Program' />
                                <img className='img-fluid boxc cover' src={`http://ompcms.okular.co.id${this.state.Resources_Product_Image_4}`} alt='Okular Mentorship Program' />
                              </a>
                            </div>
                            <div className='col-lg-12 p-0'>
                              <div className='space'></div>
                            </div>
                            <Markup tagName='span' className='num' content={Resources_Num_2} />
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='container-fluid'>
                          <div className='row'>
                            <div className='col-lg-6 pr-lg-0'>
                              <a className='cursorHoverImg' href={Resources_Product_Link_5}>
                                <img className='img-fluid background' src={imgHomeImages12} alt='Okular Mentorship Program' />
                                <img className='img-fluid boxc cover' src={`http://ompcms.okular.co.id${this.state.Resources_Product_Image_5}`} alt='Okular Mentorship Program' />
                              </a>
                            </div>
                            <div className='col-lg-6 pl-lg-0'>
                              <a className='cursorHoverImg' href={Resources_Product_Link_6}>
                                <img className='img-fluid background' src={imgHomeImages11} alt='Okular Mentorship Program' />
                                <img className='img-fluid boxc cover' src={`http://ompcms.okular.co.id${this.state.Resources_Product_Image_6}`} alt='Okular Mentorship Program' />
                              </a>
                            </div>
                            <div className='col-lg-12 p-0'>
                              <div className='space'></div>
                            </div>
                            <Markup tagName='span' className='num' content={Resources_Num_3} />
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
              <img className='img-fluid ornament d-none d-lg-block' src={imgHomeImages09} alt='Okular Mentorship Program' />
              <img className='img-fluid ornament02 d-none d-lg-block' src={imgHomeImages10} alt='Okular Mentorship Program' />
            </div>

            {/* Contact */}
            <div className='col-lg-6 py-lg-10p pl-lg-0 pr-lg-5p homeContact d-none d-lg-inline-block'>
              <iframe data-aos='fade-right' data-aos-duration='1300' src={Contact_Embed} width='600' height='450' allowfullscreen='' loading='lazy'></iframe>
            </div>
            <div className='col-lg-6 pt-m-20p py-lg-10p px-m-10p pl-lg-0 pr-lg-5p homeContact'>
              <div className='compBrief wrap' data-aos='fade-down' data-aos-duration='1300'>
                <Markup tagName='h6' content={Contact_Sub_Title} />
                <Markup tagName='h3' content={Contact_Title} />
                <form onSubmit={sendEmail}>
                  <div className='form-row'>
                    <div className='form-group col-lg-6 pr-lg-5p'>
                      <label>{Contact_Form_Title1}</label>
                      <input type='text' name='your-name' className='form-control' />
                      </div>
                    <div className='form-group col-lg-6'>
                      <label>{Contact_Form_Title2}</label>
                      <input type='email' name='your-email' className='form-control' />
                      </div>
                    <div className='form-group col-lg-6 pr-lg-5p'>
                      <label>{Contact_Form_Title3}</label>
                      <input type='number' name='your-phone' className='form-control' />
                      </div>
                    <div className='form-group col-lg-6'>
                      <label>{Contact_Form_Title4}</label>
                      <select name='your-subject' className='form-control'>
                          <option value='Ingin menjadi Peserta' selected>{Contact_Form_Title4_Field1}</option>
                          <option value='Ingin Berkolaborasi'>{Contact_Form_Title4_Field2}</option>
                      </select>
                      </div>
                      <div className='form-group col-lg-12'>
                      <label>{Contact_Form_Title5}</label>
                        <textarea name='your-message' className='form-control' rows='6'></textarea>
                      </div>
                  </div>
                  <input type='submit' className='btnBlack' value={Contact_Form_Button}></input>
                </form>
              </div>
            </div>
            <div className='col-12 py-m-20p px-0 homeContact d-block d-lg-none'>
              <iframe data-aos='fade-right' data-aos-duration='1300' src={Contact_Embed} width='600' height='450' allowfullscreen='' loading='lazy'></iframe>
            </div>

            {/* Testimonial */}
            <div className='col-lg-6 pb-m-0 py-lg-10p px-m-10p px-lg-5p homeTestimonial'>
              <div className='wrapImage' data-aos='fade-right' data-aos-duration='1300'>
                <img className='img-fluid frame' src={imgHomeImages13} alt='Okular Mentorship Program' />
                <img className='img-fluid image' src={`http://ompcms.okular.co.id${this.state.Testimonial_Image}`} alt='Okular Mentorship Program' />
              </div>
            </div>
            <div className='col-lg-6 pt-m-0 py-lg-10p px-m-10p pl-lg-0 pr-lg-5p homeTestimonial'>
              <img className='img-fluid ornament d-none d-lg-block' data-aos='fade-left' data-aos-duration='1300' src={imgHomeImages14} alt='Okular Mentorship Program' />
              <div className='compBrief' data-aos='fade-up' data-aos-duration='1300'>
                <Markup tagName='h3' content={Testimonial_Title} />
                <div className='wrap'>
                  <Markup tagName='div' content={Testimonial_Desc} />
                </div>
              </div>
            </div>
            
            {/* More */}
            <div className='col-lg-6 py-lg-10p px-lg-10p homeMore d-none d-lg-inline-block'>
              <div className='wrap'>
                <a className='cursorHoverImg2'>
                  <div className='homeMoreInstagram'>
                    {/* Place <div> tag where you want the feed to appear */}
                    <div id='curator-feed-default-feed-layout'></div>
                    {/* The Javascript can be moved to the end of the html page before the </body> tag */}
                  </div>
                </a>
                {/* <a href='https://www.instagram.com/okularmentorshipprogram/'><img class='img-fluid image' src={homeMore01} alt='Okular Mentorship Program' /></a> */}
                <div class='compBrief desc' data-aos='fade-up' data-aos-duration='1300'>
                  <h6>{More_Left_Sub_Title}</h6>
                  <h5>{More_Left_Title}</h5>
                  <img class='img-fluid' src={`http://ompcms.okular.co.id${this.state.More_Left_Icon}`} alt='Okular Mentorship Program' />
                  <a target='_blank' href={More_Left_Link}><b>{More_Left_Link_Title}</b></a>
                </div>
              </div>
            </div>
            <div class='col-lg-6 py-lg-10p px-lg-10p homeMore d-none d-lg-inline-block'>
              <div class='wrap'>
                <a class='cursorHoverImg2' target='_blank' href={More_Right_Link}><img class='img-fluid image' src={`http://ompcms.okular.co.id${this.state.More_Right_Image}`} alt='Okular Mentorship Program' /></a>
                <div class='compBrief desc' data-aos='fade-up' data-aos-duration='1300'>
                  <h6>{More_Right_Sub_Title}</h6>
                  <h5>{More_Right_Title}</h5>
                  {/* <iframe src='https://open.spotify.com/embed-podcast/episode/1UExZNo0W5UC4O9F6ggVBl' width='100%' height='232' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe> */}
                  <iframe src={More_Right_Embed} width='100%' height='155' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>
                  {/* <iframe src='https://open.spotify.com/embed-podcast/episode/1UExZNo0W5UC4O9F6ggVBl' width='100%' height='80' frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe> */}
                </div>
              </div>
            </div>
            <div class='col-12 pt-m-20p pb-m-10p px-m-10p homeMore bgLightGrey d-block d-lg-none'>
              <div class='compBrief wrap' data-aos='fade-up' data-aos-duration='1300'>
                <h6>{More_Mobile_Sub_Title}</h6>
                <h3>{More_Mobile_Title}</h3>
              </div>
            </div>
            <div class='col-12 pb-m-20p px-m-0 homeMore bgLightGrey d-block d-lg-none'>
              <OwlCarousel className='carouselStagePadding owl-theme' {...optionCarouselStagePadding}>
                <div class='item'>
                  <a href={More_Left_Link}><img class='img-fluid image' src={`http://ompcms.okular.co.id${this.state.More_Left_Post}`} alt='Okular Mentorship Program' /></a>
                  <a class='btnBlack' target='_blank' href={More_Left_Link}>{More_Left_Link_Title}</a>
                </div>
                <div class='item'>
                  <a href={More_Right_Link}><img class='img-fluid image' src={`http://ompcms.okular.co.id${this.state.More_Right_Image}`} alt='Okular Mentorship Program' /></a>
                  <a class='btnBlack' target='_blank' href={More_Right_Link}>{More_Mobile_Link_Title}</a>
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

export default Home;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../App.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import imgQuizHeader01 from '../../../assets/images/quiz/quizHeader01.png';
import imgQuizHeaderMobile01 from '../../../assets/images/quiz/quizHeaderMobile01.png';
import imgArrowDownBlack from '../../../assets/images/arrowDownBlack.png';
import imgQuizImagesMobile01 from '../../../assets/images/quiz/quizImagesMobile01.png';
import imgQuizImages01 from '../../../assets/images/quiz/quizImages01.png';

const QuizStart = ({ onQuizStart }) => {

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
            <img className='img-fluid background d-none d-lg-block moveTop' data-aos='fade-in' data-aos-duration='1000' src={imgQuizHeader01} alt='Okular Mentorship Program' />
            <img className='img-fluid background d-block d-lg-none' data-aos='fade-in' data-aos-duration='1000' src={imgQuizHeaderMobile01} alt='Okular Mentorship Program' />
            <div className='moveDownHeader moveReWiHeader moveReHeHeader boxc'>
              <div className='circle boxc'></div>
            </div>
            <a id='godown' className='moveTop' href='#quizBrief'>
              <img src={imgArrowDownBlack} />
            </a>
          </div>

          {/* Brief */}
          <div id='quizBrief' className='col-lg-6 py-m-20p py-lg-10p pl-m-10p pr-m-0 px-lg-5p quizBrief'>
            <div className='compBrief wrap' data-aos='fade-right' data-aos-duration='1300'>
              <div className='title'>
                <h6>SUDAH SIAP?</h6>
                <h3>Sebelum Memulai</h3>
              </div>
              <img className='img-fluid d-block d-lg-none' data-aos='fade-left' data-aos-duration='1300' src={imgQuizImagesMobile01} alt='Okular Mentorship Program' />
              <div className='brief' data-aos='fade-up' data-aos-duration='1300'>
                <p>Quiz ini tidak untuk menghakimi kalian, kecuali kalau kalian merasa dihakimi ya tidak apa-apa. Tapi, quiz ini hanya sebagai panduan supaya kalian jadi tahu kira-kira kelas mana yang lebih baik diambil dan juga memungkinkan kalian untuk tahu apakah ada pengetahuan yang perlu di asah kembali.</p>
                <p>Yuk kita mulai!</p>
                <button className='btnBlack' onClick={onQuizStart}>Mulai!</button>
              </div>
            </div>
          </div>
          <div className='col-lg-6 py-lg-10p pl-lg-0 pr-lg-5p quizBrief d-none d-lg-inline-block'>
            <img className='img-fluid' data-aos='fade-left' data-aos-duration='1300' src={imgQuizImages01} alt='Okular Mentorship Program' />
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default QuizStart;
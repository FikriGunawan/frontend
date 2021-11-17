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
import imgQuizQuestionImages01 from '../../assets/images/quiz/quizQuestionImages01.png';
import imgQuizQuestionImagesMobile01 from '../../assets/images/quiz/quizQuestionImagesMobile01.png';
import imgArrowNext from '../../assets/images/arrowNext.png';


const QuizQuestion01 = () => {
  
  return (
    <>
      {/* Navbar */}
      <Navbar
        langID='/id/quiz-question-01'
        langEN='/en/quiz-question-01'
      />

      {/* Main */}
      <div id='mainQuestion' className='container-fluid'>
        <div className='row'>

          {/* Section Content */}
          <div className='col-lg-12 p-0 questionContent bgLightGrey'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12 p-0'>
                  <img className='img-fluid w-lg-100p d-none d-lg-block' src={imgQuizQuestionImages01} alt='Okular Mentorship Program' />
                  <div className='compBrief'>
                    <h6>PART 1 OF 5</h6>
                    <h5>Design Theory</h5>
                  </div>
                  <img className='img-fluid w-lg-100p d-block d-lg-none' src={imgQuizQuestionImagesMobile01} alt='Okular Mentorship Program' />
                </div>
                <div className='col-lg-12 pb-lg-10p px-lg-5p wrap'>
                  <form action='process.php' method='post' enctype='multipart/form-data'>
                    <div className='form-group'>
                      <p><b>1. Which is <span>NOT</span> part of the Gestalt?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p1q1r1' name='q1' value='Figure & Ground'/>
                        <label for='p1q1r1'>Figure & Ground</label>
                        <input type='radio' id='p1q1r2' name='q1' value='Flow' />
                        <label for='p1q1r2'>Flow</label>
                        <input type='radio' id='p1q1r3' name='q1' value='Closure' />
                        <label for='p1q1r3'>Closure</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>2. Does a file count as PNG when a client sends you a file in word format?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p1q2r1' name='q2' value='Tidak' />
                        <label for='p1q2r1'>No</label>
                        <input type='radio' id='p1q2r2' name='q2' value='Ya, selama image terlampir di dalam dokumen merupakan PNG' />
                        <label for='p1q2r2'>Yes, as long as the image attached to the document is a PNG</label>
                        <input type='radio' id='p1q2r3' name='q2' value='Itu tergantung dengan versi dari Microsoft Word' />
                        <label for='p1q2r3'>It depends on the version of Microsoft Word</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>3. What is monochromatic color?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p1q3r1' name='q3' value='Warna dengan tint, shade, and tone yang berbeda' />
                        <label for='p1q3r1'>Colors with different tints, shades, and tones</label>
                        <input type='radio' id='p1q3r2' name='q3' value='Kombinasi warna yang hanya terdiri dari putih, abu-abu, dan hitam' />
                        <label for='p1q3r2'>A color combination consisting of only white, gray, and black</label>
                        <input type='radio' id='p1q3r3' name='q3' value='Kombinasi warna yang terdiri dari warna primer' />
                        <label for='p1q3r3'>Color combinations consisting of primary colors</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>4. Colors that are opposite each other on the color wheel are called?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p1q4r1' name='q4' value='Analogous' />
                        <label for='p1q4r1'>Analogous</label>
                        <input type='radio' id='p1q4r2' name='q4' value='Complementary' />
                        <label for='p1q4r2'>Complementary</label>
                        <input type='radio' id='p1q4r3' name='q4' value='Split Complementary' />
                        <label for='p1q4r3'>Split Complementary</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>5. What is Leading?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p1q5r1' name='q5' value='Penyesuaian spasi antara dua huruf' />
                        <label for='p1q5r1'>Space adjustment between two letters</label>
                        <input type='radio' id='p1q5r2' name='q5' value='Jarak vertikal antara baris tulisan' />
                        <label for='p1q5r2'>Vertical distance between lines of writing</label>
                        <input type='radio' id='p1q5r3' name='q5' value='Jarak keseluruhan antara kelompok huruf' />
                        <label for='p1q5r3'>Overall distance between letter groups</label>
                      </div>
                    </div>
                    {/* <button className='btnBlack next' type='submit'>Next</button> */}
                    <Link className='btnBlack d-none d-lg-block next' to='/en/quiz-question-02'>Next</Link>
                    <div className='cta d-block d-lg-none'>
                      <h6>PART 1 OF 5</h6>
                      <Link className='next boxc' to='/en/quiz-question-02'><img className='img-fluid' src={imgArrowNext} /></Link>
                    </div>
                  </form>
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

export default QuizQuestion01;
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
import imgQuizQuestionImages02 from '../../assets/images/quiz/quizQuestionImages02.png';
import imgQuizQuestionImagesMobile02 from '../../assets/images/quiz/quizQuestionImagesMobile02.png';
import imgArrowPrev from '../../assets/images/arrowPrev.png';
import imgArrowNext from '../../assets/images/arrowNext.png';


const QuizQuestion02 = () => {
  
  return (
    <>
      {/* Navbar */}
      <Navbar
        langID='/id/quiz-question-02'
        langEN='/en/quiz-question-02'
      />

      {/* Main */}
      <div id='mainQuestion' className='container-fluid'>
        <div className='row'>

          {/* Section Content */}
          <div className='col-lg-12 p-0 questionContent bgLightGrey'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12 p-0'>
                  <img className='img-fluid w-lg-100p d-none d-lg-block' src={imgQuizQuestionImages02} alt='Okular Mentorship Program' />
                  <div className='compBrief'>
                    <h6>PART 2 OF 5</h6>
                    <h5>Adobe Illustrator</h5>
                  </div>
                  <img className='img-fluid w-lg-100p d-block d-lg-none' src={imgQuizQuestionImagesMobile02} alt='Okular Mentorship Program' />
                </div>
                <div className='col-lg-12 pb-lg-10p px-lg-5p wrap'>
                  <form action='process.php' method='post' enctype='multipart/form-data'>
                    <div className='form-group'>
                      <p><b>1. The following are tools that are included in the Transformation tools category, <span>EXCEPT</span>:</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p2q1r1' name='q6' value='Scale'/>
                        <label for='p2q1r1'>Scale</label>
                        <input type='radio' id='p2q1r2' name='q6' value='Invert' />
                        <label for='p2q1r2'>Invert</label>
                        <input type='radio' id='p2q1r3' name='q6' value='Reflect' />
                        <label for='p2q1r3'>Reflect</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>2. You can change the width and length of the artboard after you create it.</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p2q2r1' name='q7' value='Benar' />
                        <label for='p2q2r1'>True</label>
                        <input type='radio' id='p2q2r2' name='q7' value='Salah' />
                        <label for='p2q2r2'>Wrong</label>
                        <input type='radio' id='p2q2r3' name='q7' value='Hanya pada saat mengecilkan ukuran artboard-nya' />
                        <label for='p2q2r3'>Only when reducing the size of the artboard</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>3. Where can you find the Drop Shadow Effect?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p2q3r1' name='q8' value='Distort & Transform' />
                        <label for='p2q3r1'>Distort & Transform</label>
                        <input type='radio' id='p2q3r2' name='q8' value='Stylize' />
                        <label for='p2q3r2'>Stylize</label>
                        <input type='radio' id='p2q3r3' name='q8' value='Blur' />
                        <label for='p2q3r3'>Blur</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>4. Can you expand brush strokes?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p2q4r1' name='q9' value='Tergantung dengan stroke effect-nya' />
                        <label for='p2q4r1'>Depends on the stroke effect</label>
                        <input type='radio' id='p2q4r2' name='q9' value='Tidak bisa' />
                        <label for='p2q4r2'>Can't</label>
                        <input type='radio' id='p2q4r3' name='q9' value='Ya, bisa' />
                        <label for='p2q4r3'>Yes</label>
                      </div>
                    </div>
                    {/* <button className='btnBlack prev' type='submit'>Previous</button> */}
                    {/* <button className='btnBlack next' type='submit'>Next</button> */}
                    <Link className='btnBlack prev d-none d-lg-inline-block' to='/en/quiz-question-01'>Previous</Link>
                    <Link className='btnBlack next d-none d-lg-block' to='/en/quiz-question-03'>Next</Link>
                    <div className='cta d-block d-lg-none'>
                      <h6>PART 2 OF 5</h6>
                      <Link className='prev boxc' to='/en/quiz-question-01'><img className='img-fluid' src={imgArrowPrev} /></Link>
                      <Link className='next boxc' to='/en/quiz-question-03'><img className='img-fluid' src={imgArrowNext} /></Link>
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

export default QuizQuestion02;
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
                    <h6>PART 1 DARI 5</h6>
                    <h5>Teori Desain</h5>
                  </div>
                  <img className='img-fluid w-lg-100p d-block d-lg-none' src={imgQuizQuestionImagesMobile01} alt='Okular Mentorship Program' />
                </div>
                <div className='col-lg-12 pb-lg-10p px-lg-5p wrap'>
                  <form action='process.php' method='post' enctype='multipart/form-data'>
                    <div className='form-group'>
                      <p><b>1. Mana yang <span>BUKAN</span> bagian dari Gestalt?</b></p>
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
                      <p><b>2. Apakah sebuah file dihitung sebagai PNG ketika klien mengirimi kalian file dalam format word?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p1q2r1' name='q2' value='Tidak' />
                        <label for='p1q2r1'>Tidak</label>
                        <input type='radio' id='p1q2r2' name='q2' value='Ya, selama image terlampir di dalam dokumen merupakan PNG' />
                        <label for='p1q2r2'>Ya, selama image terlampir di dalam dokumen merupakan PNG</label>
                        <input type='radio' id='p1q2r3' name='q2' value='Itu tergantung dengan versi dari Microsoft Word' />
                        <label for='p1q2r3'>Itu tergantung dengan versi dari Microsoft Word</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>3. Apa itu warna monokromatik?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p1q3r1' name='q3' value='Warna dengan tint, shade, and tone yang berbeda' />
                        <label for='p1q3r1'>Warna dengan tint, shade, and tone yang berbeda</label>
                        <input type='radio' id='p1q3r2' name='q3' value='Kombinasi warna yang hanya terdiri dari putih, abu-abu, dan hitam' />
                        <label for='p1q3r2'>Kombinasi warna yang hanya terdiri dari putih, abu-abu, dan hitam</label>
                        <input type='radio' id='p1q3r3' name='q3' value='Kombinasi warna yang terdiri dari warna primer' />
                        <label for='p1q3r3'>Kombinasi warna yang terdiri dari warna primer</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>4. Warna yang saling berlawanan pada roda warna disebut?</b></p>
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
                      <p><b>5. Apa itu Leading?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p1q5r1' name='q5' value='Penyesuaian spasi antara dua huruf' />
                        <label for='p1q5r1'>Penyesuaian spasi antara dua huruf</label>
                        <input type='radio' id='p1q5r2' name='q5' value='Jarak vertikal antara baris tulisan' />
                        <label for='p1q5r2'>Jarak vertikal antara baris tulisan</label>
                        <input type='radio' id='p1q5r3' name='q5' value='Jarak keseluruhan antara kelompok huruf' />
                        <label for='p1q5r3'>Jarak keseluruhan antara kelompok huruf</label>
                      </div>
                    </div>
                    {/* <button className='btnBlack next' type='submit'>Lanjut</button> */}
                    <Link className='btnBlack d-none d-lg-block next' to='/id/quiz-question-02'>Lanjut</Link>
                    <div className='cta d-block d-lg-none'>
                      <h6>PART 1 DARI 5</h6>
                      <Link className='next boxc' to='/id/quiz-question-02'><img className='img-fluid' src={imgArrowNext} /></Link>
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
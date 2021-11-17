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
import imgQuizQuestionImages04 from '../../assets/images/quiz/quizQuestionImages04.png';
import imgQuizQuestionImagesMobile04 from '../../assets/images/quiz/quizQuestionImagesMobile04.png';
import imgArrowPrev from '../../assets/images/arrowPrev.png';
import imgArrowNext from '../../assets/images/arrowNext.png';


const QuizQuestion04 = () => {
  
  return (
    <>
      {/* Navbar */}
      <Navbar
        langID='/id/quiz-question-04'
        langEN='/en/quiz-question-04'
      />

      {/* Main */}
      <div id='mainQuestion' className='container-fluid'>
        <div className='row'>

          {/* Section Content */}
          <div className='col-lg-12 p-0 questionContent bgLightGrey'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12 p-0'>
                  <img className='img-fluid w-lg-100p d-none d-lg-block' src={imgQuizQuestionImages04} alt='Okular Mentorship Program' />
                  <div className='compBrief'>
                    <h6>PART 4 DARI 5</h6>
                    <h5>Adobe Indesign</h5>
                  </div>
                  <img className='img-fluid w-lg-100p d-block d-lg-none' src={imgQuizQuestionImagesMobile04} alt='Okular Mentorship Program' />
                </div>
                <div className='col-lg-12 pb-lg-10p px-lg-5p wrap'>
                  <form action='process.php' method='post' enctype='multipart/form-data'>
                    <div className='form-group'>
                      <p><b>1. Jika kalian ingin mengubah font untuk seluruh dokumen, apa yang dapat menghemat waktu kalian?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p4q1r1' name='q14' value='Copy and paste type frame-nya'/>
                        <label for='p4q1r1'>Copy and paste type frame-nya</label>
                        <input type='radio' id='p4q1r2' name='q14' value='Membuat paragraph style' />
                        <label for='p4q1r2'>Membuat paragraph style</label>
                        <input type='radio' id='p4q1r3' name='q14' value='Menggunakan Eye Drop tool terhadap type frame barunya ke yang lain' />
                        <label for='p4q1r3'>Menggunakan Eye Drop tool terhadap type frame barunya ke yang lain</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>2. Berikut adalah beberapa cara untuk menambahkan text ke dokumen Adobe Indesign, <span>KECUALI</span>:</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p4q2r1' name='q15' value='Paste file dengan text dari Microsoft Word' />
                        <label for='p4q2r1'>Paste file dengan text dari Microsoft Word</label>
                        <input type='radio' id='p4q2r2' name='q15' value='Membuat text frame' />
                        <label for='p4q2r2'>Membuat text frame</label>
                        <input type='radio' id='p4q2r3' name='q15' value='Menggunakan tombol command/control + T' />
                        <label for='p4q2r3'>Menggunakan tombol command/control + T</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>3. Bisakah kalian mempunyai lebih dari <span>SATU</span> slide master?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p4q3r1' name='q16' value='Hanya pada tipe document file' />
                        <label for='p4q3r1'>Hanya pada tipe document file</label>
                        <input type='radio' id='p4q3r2' name='q16' value='Tidak bisa' />
                        <label for='p4q3r2'>Tidak bisa</label>
                        <input type='radio' id='p4q3r3' name='q16' value='Ya, bisa' />
                        <label for='p4q3r3'>Ya, bisa</label>
                      </div>
                    </div>
                    {/* <button className='btnBlack prev' type='submit'>Bagian Sebelumnya</button> */}
                    {/* <button className='btnBlack next' type='submit'>Lanjut</button> */}
                    <Link className='btnBlack prev d-none d-lg-inline-block' to='/id/quiz-question-03'>Bagian Sebelumnya</Link>
                    <Link className='btnBlack next d-none d-lg-block' to='/id/quiz-question-05'>Lanjut</Link>
                    <div className='cta d-block d-lg-none'>
                      <h6>PART 4 DARI 5</h6>
                      <Link className='prev boxc' to='/id/quiz-question-03'><img className='img-fluid' src={imgArrowPrev} /></Link>
                      <Link className='next boxc' to='/id/quiz-question-05'><img className='img-fluid' src={imgArrowNext} /></Link>
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

export default QuizQuestion04;
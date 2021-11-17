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
import imgQuizQuestionImages03 from '../../assets/images/quiz/quizQuestionImages03.png';
import imgQuizQuestionImagesMobile03 from '../../assets/images/quiz/quizQuestionImagesMobile03.png';
import imgArrowPrev from '../../assets/images/arrowPrev.png';
import imgArrowNext from '../../assets/images/arrowNext.png';


const QuizQuestion03 = () => {
  
  return (
    <>
      {/* Navbar */}
      <Navbar
        langID='/id/quiz-question-03'
        langEN='/en/quiz-question-03'
      />

      {/* Main */}
      <div id='mainQuestion' className='container-fluid'>
        <div className='row'>

          {/* Section Content */}
          <div className='col-lg-12 p-0 questionContent bgLightGrey'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12 p-0'>
                  <img className='img-fluid w-lg-100p d-none d-lg-block' src={imgQuizQuestionImages03} alt='Okular Mentorship Program' />
                  <div className='compBrief'>
                    <h6>PART 3 DARI 5</h6>
                    <h5>Adobe Photoshop</h5>
                  </div>
                  <img className='img-fluid w-lg-100p d-block d-lg-none' src={imgQuizQuestionImagesMobile03} alt='Okular Mentorship Program' />
                </div>
                <div className='col-lg-12 pb-lg-10p px-lg-5p wrap'>
                  <form action='process.php' method='post' enctype='multipart/form-data'>
                    <div className='form-group'>
                      <p><b>1. Apa kepanjangan dari PNG?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p3q1r1' name='q10' value='Portable Network Graphics'/>
                        <label for='p3q1r1'>Portable Network Graphics</label>
                        <input type='radio' id='p3q1r2' name='q10' value='Photographic Network Graphics' />
                        <label for='p3q1r2'>Photographic Network Graphics</label>
                        <input type='radio' id='p3q1r3' name='q10' value='Photographic Node Graphics' />
                        <label for='p3q1r3'>Photographic Node Graphics</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>2. Bisakah kalian menduplikasi layer ke file Adobe Photoshop lain?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p3q2r1' name='q11' value='Hanya pada file yang mempunyai ukuran artboard yang sama' />
                        <label for='p3q2r1'>Hanya pada file yang mempunyai ukuran artboard yang sama</label>
                        <input type='radio' id='p3q2r2' name='q11' value='Tidak bisa' />
                        <label for='p3q2r2'>Tidak bisa</label>
                        <input type='radio' id='p3q2r3' name='q11' value='Ya, bisa' />
                        <label for='p3q2r3'>Ya, bisa</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>3. Apa itu Levels?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p3q3r1' name='q12' value='Untuk menumpuk dan menggabungkan gambar di atas satu sama lain' />
                        <label for='p3q3r1'>Untuk menumpuk dan menggabungkan gambar di atas satu sama lain</label>
                        <input type='radio' id='p3q3r2' name='q12' value='Penyesuaian untuk semua tone warna di tonal range' />
                        <label for='p3q3r2'>Penyesuaian untuk semua tone warna di tonal range</label>
                        <input type='radio' id='p3q3r3' name='q12' value='Mengembalikan versi gambar sebelumnya' />
                        <label for='p3q3r3'>Mengembalikan versi gambar sebelumnya</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>4. Bisakah kalian mengedit ribuan gambar sekaligus di Adobe Photoshop?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p3q4r1' name='q13' value='Ya, melalui Duplicate Tool' />
                        <label for='p3q4r1'>Ya, melalui Duplicate Tool</label>
                        <input type='radio' id='p3q4r2' name='q13' value='Ya, dengan kerja keras dan kebulatan tekad' />
                        <label for='p3q4r2'>Ya, dengan kerja keras dan kebulatan tekad</label>
                        <input type='radio' id='p3q4r3' name='q13' value='Ya, melalui Batch Processing' />
                        <label for='p3q4r3'>Ya, melalui Batch Processing</label>
                      </div>
                    </div>							
                    {/* <button className='btnBlack prev' type='submit'>Bagian Sebelumnya</button> */}
                    {/* <button className='btnBlack next' type='submit'>Lanjut</button> */}
                    <Link className='btnBlack prev d-none d-lg-inline-block' to='/id/quiz-question-02'>Bagian Sebelumnya</Link>
                    <Link className='btnBlack next d-none d-lg-block' to='/id/quiz-question-04'>Lanjut</Link>
                    <div className='cta d-block d-lg-none'>
                      <h6>PART 3 DARI 5</h6>
                      <Link className='prev boxc' to='/id/quiz-question-02'><img className='img-fluid' src={imgArrowPrev} /></Link>
                      <Link className='next boxc' to='/id/quiz-question-04'><img className='img-fluid' src={imgArrowNext} /></Link>
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

export default QuizQuestion03;
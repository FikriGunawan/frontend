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
import imgQuizQuestionImages05 from '../../assets/images/quiz/quizQuestionImages05.png';
import imgQuizQuestionImagesMobile05 from '../../assets/images/quiz/quizQuestionImagesMobile05.png';
import imgArrowPrev from '../../assets/images/arrowPrev.png';
import imgArrowDone from '../../assets/images/arrowDone.png';


const QuizQuestion05 = () => {
  
  return (
    <>
      {/* Navbar */}
      <Navbar
        langID='/id/quiz-question-05'
        langEN='/en/quiz-question-05'
      />

      {/* Main */}
      <div id='mainQuestion' className='container-fluid'>
        <div className='row'>

          {/* Section Content */}
          <div className='col-lg-12 p-0 questionContent bgLightGrey'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12 p-0'>
                  <img className='img-fluid w-lg-100p d-none d-lg-block' src={imgQuizQuestionImages05} alt='Okular Mentorship Program' />
                  <div className='compBrief'>
                    <h6>PART 5 DARI 5</h6>
                    <h5>Soft Skills</h5>
                  </div>
                  <img className='img-fluid w-lg-100p d-block d-lg-none' src={imgQuizQuestionImagesMobile05} alt='Okular Mentorship Program' />
                </div>
                <div className='col-lg-12 pb-lg-10p px-lg-5p wrap'>
                  <form action='process.php' method='post' enctype='multipart/form-data'>
                    <div className='form-group'>
                      <p><b>1. Apa yang akan kalian lakukan pada hari pertama kalian di kantor?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p5q1r1' name='q17' value='Menunggu sampai kalian diberikan pekerjaan'/>
                        <label for='p5q1r1'>Menunggu sampai kalian diberikan pekerjaan</label>
                        <input type='radio' id='p5q1r2' name='q17' value='Memperkenalkan diri kalian kepada rekan-rekan kantor' />
                        <label for='p5q1r2'>Memperkenalkan diri kalian kepada rekan-rekan kantor</label>
                        <input type='radio' id='p5q1r3' name='q17' value='Membuat diri kalian sendiri nyaman' />
                        <label for='p5q1r3'>Membuat diri kalian sendiri nyaman</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>2. Hal terpenting apa yang harus kalian lakukan untuk mempersiapkan wawancara?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p5q2r1' name='q18' value='Tidur dengan nyenyak' />
                        <label for='p5q2r1'>Tidur dengan nyenyak</label>
                        <input type='radio' id='p5q2r2' name='q18' value='Mengingat semua hal yang harus diucapkan' />
                        <label for='p5q2r2'>Mengingat semua hal yang harus diucapkan</label>
                        <input type='radio' id='p5q2r3' name='q18' value='Perawatan diri untuk membuat diri kalian tetap tenang dan meningkatkan kepercayaan diri kalian' />
                        <label for='p5q2r3'>Perawatan diri untuk membuat diri kalian tetap tenang dan meningkatkan kepercayaan diri kalian</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>3. Bagaimana kalian menerima kritik dari rekan kerja kalian?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p5q3r1' name='q19' value='Belajar dari kritik dan masukan konstruktif untuk hasil kerja kalian' />
                        <label for='p5q3r1'>Belajar dari kritik dan masukan konstruktif untuk hasil kerja kalian</label>
                        <input type='radio' id='p5q3r2' name='q19' value='Cobalah untuk mempertahankan desain kalian saat kalian percaya diri dengannya' />
                        <label for='p5q3r2'>Cobalah untuk mempertahankan desain kalian saat kalian percaya diri dengannya</label>
                        <input type='radio' id='p5q3r3' name='q19' value='Buktikan kepada mereka apakah yang mereka katakan dapat membuat desain kalian lebih baik atau tidak' />
                        <label for='p5q3r3'>Buktikan kepada mereka apakah yang mereka katakan dapat membuat desain kalian lebih baik atau tidak</label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <p><b>4. Apa hal pertama yang harus kalian lakukan saat memulai meeting dengan klien potensial?</b></p>
                      <div className='switch-field'>
                        <input type='radio' id='p5q4r1' name='q20' value='Jabat tangan mereka dan memperkenalkan diri kalian' />
                        <label for='p5q4r1'>Jabat tangan mereka dan memperkenalkan diri kalian</label>
                        <input type='radio' id='p5q4r2' name='q20' value='Memberikan kartu bisnis kalian' />
                        <label for='p5q4r2'>Memberikan kartu bisnis kalian</label>
                        <input type='radio' id='p5q4r3' name='q20' value='Berikan mereka pujian' />
                        <label for='p5q4r3'>Berikan mereka pujian</label>
                      </div>
                    </div>
                    {/* <button className='btnBlack prev' type='submit'>Bagian Sebelumnya</button> */}
                    {/* <button className='btnYellow next' type='submit'>Selesai</button> */}
                    <Link className='btnBlack prev d-none d-lg-inline-block' to='/id/quiz-question-04'>Bagian Sebelumnya</Link>
                    <Link className='btnYellow next d-none d-lg-block' to='/id/quiz-category-01'>Selesai</Link>
                    <div className='cta d-block d-lg-none'>
                      <h6>PART 5 DARI 5</h6>
                      <Link className='prev boxc' to='/id/quiz-question-04'><img className='img-fluid' src={imgArrowPrev} /></Link>
                      <Link className='next boxc' to='/id/quiz-category-01'><img className='img-fluid' src={imgArrowDone} /></Link>
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

export default QuizQuestion05;
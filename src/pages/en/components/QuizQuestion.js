import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../App.css';
import './QuizQuestion.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import imgQuizQuestionImages04 from '../../../assets/images/quiz/quizQuestionImages04.png';
import imgQuizQuestionImagesMobile04 from '../../../assets/images/quiz/quizQuestionImagesMobile04.png';

const QuizQuestion = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {

  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1){
      onSetActiveQuestion(activeQuestion + 1);
    }else{
      onSetStep(3);
    }
  }

  return (
    <>
      {/* Main */}
      <div id='mainQuestion' className='container-fluid'>
        <div className='row'>

          {/* Section Content */}
          <div className='col-lg-12 p-0 questionContent bgLightGrey text-center'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12 p-0'>
                  <img className='img-fluid w-lg-100p d-none d-lg-block' src={imgQuizQuestionImages04} alt='Okular Mentorship Program' />
                  <div className='compBrief' data-aos='fade-left' data-aos-duration='1300'>
                    <h6>PART {data.no}</h6>
                    <h3>{data.category}</h3>
                  </div>
                  <img className='img-fluid w-lg-100p d-block d-lg-none' src={imgQuizQuestionImagesMobile04} alt='Okular Mentorship Program' />
                </div>
                <div className='col-lg-12 pb-lg-10p px-lg-5p wrap' data-aos='fade-up' data-aos-duration='1300'>
                  <h5><b>{data.question}</b></h5>
                  <div className='switch-field pt-lg-5p' ref={radiosWrapper}>
                    {data.choices.map((choice, i) => (
                      <label key={i}>
                        <input type='radio' name='answer' value={choice} onChange={changeHandler} />
                        {choice}
                      </label>
                    ))}
                  </div>
                  {error && <div className='text-danger'>{error}</div>}
                  <button className='btnBlack' onClick={nextClickHandler}>Next</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default QuizQuestion;
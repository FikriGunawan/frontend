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
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizEnd from './components/QuizEnd';
import QuizData from './data/quiz.json';

let interval;

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <>

      {step === 1 && <QuizStart onQuizStart={quizStartHandler} />}
      {step === 2 && <QuizQuestion
        data={QuizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={QuizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <QuizEnd 
        results={answers}
        data={QuizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}
      
    </>
  );
}

export default Quiz;
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
import imgQuizImages03 from '../../../assets/images/quiz/quizImages03.png';
import imgQuizImagesMobile03 from '../../../assets/images/quiz/quizImagesMobile03.png';
import imgQuizLine from '../../../assets/images/quiz/quizLine.png';
import imgQuizIcon01 from '../../../assets/images/quiz/quizIcon01.png';
import imgQuizOrnamentMobile01 from '../../../assets/images/quiz/quizOrnamentMobile01.png';
import imgQuizImages06 from '../../../assets/images/quiz/quizImages06.png';
import imgQuizIcon02 from '../../../assets/images/quiz/quizIcon02.png';
import imgQuizIcon03 from '../../../assets/images/quiz/quizIcon03.png';

const QuizEnd = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const longeur = data.length;

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);   

  const valueScore = Math.floor((correctAnswers / longeur) * 100);
  console.log("Nilai benar = "+correctAnswers);
  console.log("Total soal = "+longeur);
  console.log("Persentase = "+valueScore);
  if(valueScore >= 85){
    console.log("Hasil Kategori 1 = "+valueScore);
    window.location.href = 'http://ompfe.okular.co.id/en/quiz-category-01';
  } else if(valueScore >= 75 && valueScore < 85){
    console.log("Hasil Kategori 2 = "+valueScore);
    window.location.href = 'http://ompfe.okular.co.id/en/quiz-category-02';
  } else {
    console.log("Failed Score = "+valueScore);
    window.location.href = 'http://ompfe.okular.co.id/en/quiz-category-03';
  }

  return(
    <>
    </>
  );
}

export default QuizEnd;
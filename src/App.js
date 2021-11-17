import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import ScrollToTop from './ScrollToTop.js';
import IDHome from './pages/id/Home.js';
import IDQuiz from './pages/id/Quiz.js';
import IDQuizQuestion01 from './pages/id/QuizQuestion01.js';
import IDQuizQuestion02 from './pages/id/QuizQuestion02.js';
import IDQuizQuestion03 from './pages/id/QuizQuestion03.js';
import IDQuizQuestion04 from './pages/id/QuizQuestion04.js';
import IDQuizQuestion05 from './pages/id/QuizQuestion05.js';
import IDQuizCategory01 from './pages/id/QuizCategory01.js';
import IDQuizCategory02 from './pages/id/QuizCategory02.js';
import IDQuizCategory03 from './pages/id/QuizCategory03.js';
import IDFundamentalDesignCourse from './pages/id/FundamentalDesignCourse.js';
import IDDesignStartupCourse from './pages/id/DesignStartupCourse.js';
import IDCompleteDesignCourse from './pages/id/CompleteDesignCourse.js';
import IDFreeResources from './pages/id/FreeResources.js';
import IDSingleResources from './pages/id/SingleResources.js';
import IDStepbyStepforBecomingaProfessional from './pages/id/StepbyStepforBecomingaProfessional.js';
import IDBuildingYourResume from './pages/id/BuildingYourResume.js';
import IDLogoDesignProposalTemplate from './pages/id/LogoDesignProposalTemplate.js';
import IDWebsiteDesignProposalTemplate from './pages/id/WebsiteDesignProposalTemplate.js';
import IDCreatingYourUltimatePortfolio from './pages/id/CreatingYourUltimatePortfolio.js';
import IDDeterminingtheFinalProject from './pages/id/DeterminingtheFinalProject.js';
import ENHome from './pages/en/Home.js';
import ENQuiz from './pages/en/Quiz.js';
import ENQuizQuestion01 from './pages/en/QuizQuestion01.js';
import ENQuizQuestion02 from './pages/en/QuizQuestion02.js';
import ENQuizQuestion03 from './pages/en/QuizQuestion03.js';
import ENQuizQuestion04 from './pages/en/QuizQuestion04.js';
import ENQuizQuestion05 from './pages/en/QuizQuestion05.js';
import ENQuizCategory01 from './pages/en/QuizCategory01.js';
import ENQuizCategory02 from './pages/en/QuizCategory02.js';
import ENQuizCategory03 from './pages/en/QuizCategory03.js';
import ENFundamentalDesignCourse from './pages/en/FundamentalDesignCourse.js';
import ENDesignStartupCourse from './pages/en/DesignStartupCourse.js';
import ENCompleteDesignCourse from './pages/en/CompleteDesignCourse.js';
import ENFreeResources from './pages/en/FreeResources.js';
import ENSingleResources from './pages/en/SingleResources.js';
import ENStepbyStepforBecomingaProfessional from './pages/en/StepbyStepforBecomingaProfessional.js';
import ENBuildingYourResume from './pages/en/BuildingYourResume.js';
import ENLogoDesignProposalTemplate from './pages/en/LogoDesignProposalTemplate.js';
import ENWebsiteDesignProposalTemplate from './pages/en/WebsiteDesignProposalTemplate.js';
import ENCreatingYourUltimatePortfolio from './pages/en/CreatingYourUltimatePortfolio.js';
import ENDeterminingtheFinalProject from './pages/en/DeterminingtheFinalProject.js';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={IDHome} />
          <Route path='/id/quiz' component={IDQuiz} />
          <Route path='/id/quiz-question-01' component={IDQuizQuestion01} />
          <Route path='/id/quiz-question-02' component={IDQuizQuestion02} />
          <Route path='/id/quiz-question-03' component={IDQuizQuestion03} />
          <Route path='/id/quiz-question-04' component={IDQuizQuestion04} />
          <Route path='/id/quiz-question-05' component={IDQuizQuestion05} />
          <Route path='/id/quiz-category-01' component={IDQuizCategory01} />
          <Route path='/id/quiz-category-02' component={IDQuizCategory02} />
          <Route path='/id/quiz-category-03' component={IDQuizCategory03} />
          <Route path='/id/fundamental-design-course' component={IDFundamentalDesignCourse} />
          <Route path='/id/design-startup-course' component={IDDesignStartupCourse} />
          <Route path='/id/complete-design-course' component={IDCompleteDesignCourse} />
          <Route path='/id/free-resources' component={IDFreeResources} />
          <Route exact path='/id/resources/:postid' render={props=> (
            <IDSingleResources {...props} />
          )} />
          <Route path='/id/step-by-step-for-becoming-a-professional' component={IDStepbyStepforBecomingaProfessional} />
          <Route path='/id/building-your-resume' component={IDBuildingYourResume} />
          <Route path='/id/logo-design-proposal-template' component={IDLogoDesignProposalTemplate} />
          <Route path='/id/website-design-proposal-template' component={IDWebsiteDesignProposalTemplate} />
          <Route path='/id/creating-your-ultimate-portfolio' component={IDCreatingYourUltimatePortfolio} />
          <Route path='/id/determining-the-final-project' component={IDDeterminingtheFinalProject} />
          <Route path='/en/home' component={ENHome} />
          <Route path='/en/quiz' component={ENQuiz} />
          <Route path='/en/quiz-question-01' component={ENQuizQuestion01} />
          <Route path='/en/quiz-question-02' component={ENQuizQuestion02} />
          <Route path='/en/quiz-question-03' component={ENQuizQuestion03} />
          <Route path='/en/quiz-question-04' component={ENQuizQuestion04} />
          <Route path='/en/quiz-question-05' component={ENQuizQuestion05} />
          <Route path='/en/quiz-category-01' component={ENQuizCategory01} />
          <Route path='/en/quiz-category-02' component={ENQuizCategory02} />
          <Route path='/en/quiz-category-03' component={ENQuizCategory03} />
          <Route path='/en/fundamental-design-course' component={ENFundamentalDesignCourse} />
          <Route path='/en/design-startup-course' component={ENDesignStartupCourse} />
          <Route path='/en/complete-design-course' component={ENCompleteDesignCourse} />
          <Route path='/en/free-resources' component={ENFreeResources} />
          <Route exact path='/en/resources/:postid' render={props=> (
            <ENSingleResources {...props} />
          )} />
          <Route path='/en/step-by-step-for-becoming-a-professional' component={ENStepbyStepforBecomingaProfessional} />
          <Route path='/en/building-your-resume' component={ENBuildingYourResume} />
          <Route path='/en/logo-design-proposal-template' component={ENLogoDesignProposalTemplate} />
          <Route path='/en/website-design-proposal-template' component={ENWebsiteDesignProposalTemplate} />
          <Route path='/en/creating-your-ultimate-portfolio' component={ENCreatingYourUltimatePortfolio} />
          <Route path='/en/determining-the-final-project' component={ENDeterminingtheFinalProject} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

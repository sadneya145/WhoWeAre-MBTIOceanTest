import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/LoginSignup/Signup';
import Login from './Pages/LoginSignup/Login';
import Home from './Pages/Home/Home';
import OceanQuiz from './Pages/Quiz/OceanQuiz';
import OceanResults from './Pages/Results/OceanResults';
import Profile from './Pages/Profile/Profile';
import AboutUs from './Pages/AboutUs/AboutUs';
import Faq from './Pages/FAQ/FAQ';
import PrivacyPolicyPage from './Pages/FAQ/PrivacyPolicy';

import ISTJ from './MBTI/ISTJ';
import ESTJ from './MBTI/ESTJ';
import ENTJ from './MBTI/ENTJ';
import ESFJ from './MBTI/ESFJ';
import ENFJ from './MBTI/ENFJ';
import ISFJ from './MBTI/ISFJ';
import INTJ from './MBTI/INTJ';
import INFJ from './MBTI/INFJ';
import ESTP from './MBTI/ESTP';
import ESFP from './MBTI/ESFP';
import ENTP from './MBTI/ENTP';
import ENFP from './MBTI/ENFP';
import ISTP from './MBTI/ISTP';
import ISFP from './MBTI/ISFP';
import INTP from './MBTI/INTP';
import INFP from './MBTI/INFP';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path='/home/profile/:email' element={<Profile />} />
        <Route path="/home/quiz" element={<OceanQuiz />} />
        <Route path="/home/results" element={<OceanResults />} />
        <Route path="/home/aboutus" element={<AboutUs />} />
        <Route path='/home/faq' element={<Faq />} />
        <Route path='/home/privacy' element={<PrivacyPolicyPage />} />

        {/* Personalities */}
        <Route path='/personality/ISTJ' element={<ISTJ />} />
        <Route path='/personality/ISFJ' element={<ISFJ />} />
        <Route path='/personality/INTJ' element={<INTJ />} />
        <Route path='/personality/INFJ' element={<INFJ />} />
        <Route path='/personality/ISTP' element={<ISTP />} />
        <Route path='/personality/ISFP' element={<ISFP />} />
        <Route path='/personality/INTP' element={<INTP />} />
        <Route path='/personality/INFP' element={<INFP />} />
        <Route path='/personality/ESTJ' element={<ESTJ />} />
        <Route path='/personality/ENTJ' element={<ENTJ />} />
        <Route path='/personality/ESFJ' element={<ESFJ />} />
        <Route path='/personality/ENFJ' element={<ENFJ />} />
        <Route path='/personality/ESTP' element={<ESTP />} />
        <Route path='/personality/ESFP' element={<ESFP />} />
        <Route path='/personality/ENTP' element={<ENTP />} />
        <Route path='/personality/ENFP' element={<ENFP />} />
      </Routes>
    </Router>
  );
}

export default App;

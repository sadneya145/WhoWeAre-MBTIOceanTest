import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/LoginSignup/Signup';
import Login from './Pages/LoginSignup/Login';
import Home from './Pages/Home/Home';
import OceanQuiz from './Pages/Quiz/OceanQuiz';
import OceanResults from './Pages/Results/OceanResults';
import Profile from './Pages/Profile/Profile';
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
        <Route path='/home/profile/:email' element={<Profile/>}/>
        <Route path="/home/quiz" element={<OceanQuiz />} />
        <Route path="/home/results" element={<OceanResults />} />

        {/* Personalities */}
        <Route path='/home/personality/ISTJ' element={<ISTJ/>}/>
        <Route path='/home/personality/ISFJ' element={<ISFJ/>}/>
        <Route path='/home/personality/INTJ' element={<INTJ/>}/>
        <Route path='/home/personality/INFJ' element={<INFJ/>}/>
        <Route path='/home/personality/ISTP' element={<ISTP/>}/>
        <Route path='/home/personality/ISFP' element={<ISFP/>}/>
        <Route path='/home/personality/INTP' element={<INTP/>}/>
        <Route path='/home/personality/INFP' element={<INFP/>}/>

        <Route path='/home/personality/ESTJ' element={<ESTJ/>}/>
        <Route path='/home/personality/ENTJ' element={<ENTJ/>}/>
        <Route path='/home/personality/ESFJ' element={<ESFJ/>}/>
        <Route path='/home/personality/ENFJ' element={<ENFJ/>}/>
        <Route path='/home/personality/ESTP' element={<ESTP/>}/>
        <Route path='/home/personality/ESFP' element={<ESFP/>}/>
        <Route path='/home/personality/ENTP' element={<ENTP/>}/>
        <Route path='/home/personality/ENFP' element={<ENFP/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/LoginSignup/Signup';
import Login from './Pages/LoginSignup/Login';
import Home from './Pages/Home/Home';
import OceanQuiz from './Pages/Quiz/OceanQuiz';
import OceanResults from './Pages/Results/OceanResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<OceanQuiz />} />
        <Route path="/results" element={<OceanResults />} />
        
      </Routes>
    </Router>
  );
}

export default App;

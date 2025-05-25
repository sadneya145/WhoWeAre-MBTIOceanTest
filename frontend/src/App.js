import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/LoginSignup/Signup';
import Login from './Pages/LoginSignup/Login';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;

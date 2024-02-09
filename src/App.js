import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [loginType, setLoginType] = useState({
    'title': 'Student Login',
    'desc': 'Welcome back, students! Please enter your credentials to access your account.',
  });
  return (

    <div className="app">
      <Navbar />

      <Router>
        <Routes>
          <Route path='/' element={<LandingPage setLoginType={setLoginType} />} />
          <Route path='/Login' element={<Login loginType={loginType} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

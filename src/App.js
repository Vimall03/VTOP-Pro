import './App.css';
import { UserProvider } from './context/UserContext';
import Login from './general/Login';
import LandingPage from './general/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from './student/Main';



function App() {
  const [loginType, setLoginType] = useState({
    'title': 'Student Login',
    'desc': 'Welcome back, Student! Please enter your credentials to access your account.',
  });
  //loginType Describes who loggs in, example Student, employee, etc.
  const [toggleMode, setToggleMode] = useState('dark')
  document.body.classList.add('body-dark');
  return (

    <div className="app">
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage  setLoginType={setLoginType} />} />
            <Route path='/Login' element={<Login loginType={loginType} />} />
            <Route path='/Main' element={<Main />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

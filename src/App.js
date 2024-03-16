import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import LineChart from './components/Graphs/Attendance';


function App() {
  const [loginType, setLoginType] = useState({
    'title': 'Student Login',
    'desc': 'Welcome back, students! Please enter your credentials to access your account.',
  });
  //loginType Describes who loggs in, example Student, employee, etc.

  return (

    <div className="app">



      <Router>
        <Routes>
          <Route path='/testroute' element={<LineChart />} />
          <Route path='/' element={<LandingPage setLoginType={setLoginType} />} />

          <Route path='/Login' element={<Login loginType={loginType} />} />
          <Route path='/Main' element={<Main />} />
        </Routes>

        <div className='d-flex flex-nowrap '>

          {<>
            <div>

            </div></>
          }
        </div>


      </Router>

    </div>
  );
}

export default App;

import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Home from '../student/Home';
import Dashboard from '../student/Dashboard';
import GradeHistory from '../student/GradeHistory';

export default function Main() {
    const [menu, setMenu] = useState('Home');
    return (
        <div className=' sidebarScroll'>
            <Sidebar setMenu={setMenu}  />
            <div className="main-content"> 
                {menu === 'Home' ? <Home /> : null}
                {menu === 'Dashboard' ? <Dashboard />  : null}
                {menu === 'Grade History' ? <GradeHistory />  : null}
                {/* Render Home component when menuItem is 'Home' */}
                {/* Render nothing when it's not 'Home' */}
            </div>
        </div>
    )
}

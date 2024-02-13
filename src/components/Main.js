import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Home from './Home';
import LandingPage from './LandingPage';

export default function Main() {
    const [menu, setMenu] = useState('Home');
    return (
        <div className='d-flex flex-nowrap'>
            <Sidebar setMenu={setMenu} />
            <div>
                {menu === 'Home' ? <Home /> : null}
                {menu === 'Dashboard' ? <></>  : null}
                {/* Render Home component when menuItem is 'Home' */}
                {/* Render nothing when it's not 'Home' */}
            </div>
        </div>
    )
}

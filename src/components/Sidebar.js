import React, { useState, useEffect } from 'react';
import logo from '../Assets/Vitlogo.png';
import { useNavigate } from 'react-router-dom';

export default function Sidebar(props) {
    const [activeStatus, setActiveStatus] = useState('Home');
    const [isExpanded, setIsExpanded] = useState(true); // Set default state to expanded
    const navigate = useNavigate();

    const handleClick = (option) => {
        setActiveStatus(option);
        props.setMenu(option);
    };

    const handleSignOut = () => {
        navigate('/Login');
    };

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            // If screen width is less than 768px (typical mobile width), collapse the sidebar by default
            if (screenWidth < 768) {
                setIsExpanded(false);
            } else {
                setIsExpanded(true);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize on initial load
        handleResize();

        // Cleanup: remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="d-flex">
            <div className={`collapse ${isExpanded ? 'show' : ''}`} id="collapseWidthExample">
                <div className="d-flex flex-column navbar-color sidebar-shadow flex-shrink-0 p-3" style={{ height: '100vh', width: 250 }}>
                    <div className="d-flex ">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <img src={logo} width={50} height={50} alt="" />
                            <span className="fs-2 fw-bold px-3 text-center navbar-brand">VIT</span>
                        </a>
                        {/* Removed button for toggling collapse */}
                    </div>

                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a onClick={() => handleClick('Home')} className={`nav-link text-white ${activeStatus === 'Home' ? 'active' : ''}`} aria-current="page">
                                <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleClick('Dashboard')} className={`nav-link text-white ${activeStatus === 'Dashboard' ? 'active' : ''}`}>
                                <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                                Dashboard
                            </a>
                        </li>
                        {/* Add other menu items */}
                    </ul>

                    <hr />
                    <div className="dropdown">
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="/">New project...</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" onClick={handleSignOut} href="">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Show collapse button only on mobile */}
            <div className="flex-shrink-0 p-2 d-md-none">
                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded={isExpanded} aria-controls="collapseWidthExample" onClick={toggleSidebar}>
                    <i className={`fa-solid ${isExpanded ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}

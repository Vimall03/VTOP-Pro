import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';


export default function Navbar() {
    const { toggleMode, setToggleMode } = useContext(UserContext);
    const handleMode = () => {
        if (toggleMode == 'dark') {
            setToggleMode('light');
            document.body.classList.add('body-light');
            document.body.classList.remove('body-dark');
        }
        else {
            setToggleMode('dark');
            document.body.classList.add('body-dark');
            document.body.classList.remove('body-light');
        }
    }
    return (
        <div>

            <nav className="navbar p-3 shadow-bottom navbar-color navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bolder fs-2 text-white " href="/">VIT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white  active" aria-current="page" href="/">Vellore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  " href="/">Chennai</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  " href="/">Bhopal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  " href="/" >Amaravathi</a>
                            </li>
                        </ul>
                    </div>
                    <div className='mx-0 fs-5'>
                        {
                            toggleMode == 'light' ?
                                <div className='text-light' onClick={handleMode}>
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                :
                                <div className='text-light' onClick={handleMode}>
                                    <i className="fa-solid fa-moon"></i>
                                </div>
                        }
                    </div>

                </div>
            </nav>

        </div>
    )
}

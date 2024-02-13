import React from 'react'


export default function Navbar(props) {
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
                    </div>
                </nav>

        </div>
    )
}

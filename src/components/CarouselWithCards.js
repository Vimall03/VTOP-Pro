import React from 'react';

export default function CarouselWithCards() {
    return (
        <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card-wrapper  d-flex justify-content-start">
                        <div className="col-md-3 mx-0 p-3">
                            <div id='student' className="card card-registered-courses card-borders ">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">CSE2001</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Credits: 4.0</h6>
                                    <p className="card-text ">Object Oriented Programming With C++ </p>
                                </div>
                                <div className="card-body text-light">
                                    <p className="card-text">Pending Assignments: 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='student' className="card card-registered-courses card-borders ">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">CSE2002</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Credits: 4.0</h6>
                                    <p className="card-text ">Data Structures and Algorithms</p>
                                </div>
                                <div className="card-body text-light">
                                    <p className="card-text">Pending Assignments: 0</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='student' className="card card-registered-courses card-borders ">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">ENG1004 </h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Credits: 2.0</h6>
                                    <p className="card-text ">EFFECTIVE TECHNICAL COMMUNICATION</p>
                                </div>
                                <div className="card-body text-light">
                                    <p className="card-text">Pending Assignments: 0</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='student' className="card card-registered-courses card-borders ">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">MAT3008 </h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Credits: 3.0</h6>
                                    <p className="card-text ">Computational Game Theory</p>
                                </div>
                                <div className="card-body text-light">
                                    <p className="card-text">Pending Assignments: 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div className="col-md-3 p-3">
                            <div id='student' className="card card-registered-courses card-borders ">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">ASE2010
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Credits: 3.0</h6>
                                    <p className="card-text ">Guidance Navigation and Control</p>
                                </div>
                                <div className="card-body text-light">
                                    <p className="card-text">Pending Assignments: 3</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='student' className="card card-registered-courses card-borders ">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">DSN2093</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Credits: 4.0</h6>
                                    <p className="card-text ">SEMESTER INTERNSHIP</p>
                                </div>
                                <div className="card-body text-light">
                                    <p className="card-text">Pending Assignments: 0</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='student' className="card card-registered-courses card-borders ">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">CSE3012</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Credits: 3.0</h6>
                                    <p className="card-text ">Mobile Application Development</p>
                                </div>
                                <div className="card-body text-light">
                                    <p className="card-text">Pending Assignments: 2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='student' className="card card-registered-courses card-borders ">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">CSD4008
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Credits: 3.0</h6>
                                    <p className="card-text ">Cyber Security Framework</p>
                                </div>
                                <div className="card-body text-light">
                                    <p className="card-text">Pending Assignments: 0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

import React, { useContext, useState } from 'react'
import CarouselWithCards from './CarouselWithCards'
import Modal from './Modal';
import { UserContext } from '../context/UserContext';

export default function Home() {
    const {toggleMode} = useContext(UserContext)
    const [showModalSchedule, setShowModalSchedule] = useState(false);
    const [showModalMeet, setShowModalMeet] = useState(false);
    const handleModalSchedule = () => {
        setShowModalSchedule(true)
        document.body.classList.add('background-overflow-hidden');
    }
    const handleModalMeet = () => {
        setShowModalMeet(true)
        document.body.classList.add('background-overflow-hidden')
    }

    return (
        <div className="container " style={{ height: '100vh' }}>
            <div className="row mt-0 ">
                <h1 className={`${toggleMode == 'dark' ? 'text-white' : 'text-dark'} p-3 fs-2 fw-bold`}>Home</h1>
                <div className="col-md-4 p-3 pt-0 ">
                    <div className={`card card-borders ${toggleMode == 'dark' ? 'card-spotlight card-scroll' : 'card-spotlight-light card-scroll-light'}  `}  style={{ height: '40vh', overflowY: 'auto' }}>
                        <div className={`card-body  ${toggleMode == 'dark'? 'text-light' : 'text-dark' }`}>
                            <h5 className="card-title">Vellore Institute of Technology - Spotlight  <i className="fa-solid fa-bullhorn"></i></h5>
                            <h6 className={`card-subtitle mb-2 ${toggleMode == 'dark' ? 'text-light' : 'text-dark'}`}>Find the latest Updates and Announcements</h6>
                            <div className="card-text mt-1 ">
                                <table className="custom-table ">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="card border-0  ">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item d-flex  card-event text-light justify-content-start   align-items-center">
                                                            <p className="card-text text-center fs-5" style={{ marginBottom: '3px' }}><i className="fa-solid fa-message"></i></p>
                                                            <p className='card-text text-center fw-semibold   px-3 '>Message from Proctor: Leave...</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="card border-0   ">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item d-flex card-event text-light justify-content-start   align-items-center">
                                                            <p className="card-text text-center fs-5" style={{ marginBottom: '3px' }}><i className="fa-solid fa-pen-to-square"></i></p>
                                                            <p className='card-text text-center fw-semibold   px-3 '>ASE2010 : 2 New Assignments</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                NAAC Accreditation with A++ grade (3.66 out of 4)</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                Ranked within the top 200 Universities in Asia (QS - Asia University Rankings 2023)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-0   p-3" >
                    <div id='' style={{ overflowY: 'auto' }} className={`card card-scroll card-borders ${toggleMode == 'dark' ? 'card-login card-scroll' : 'card-login-light card-scroll-light'}`}>
                        <div onClick={handleModalSchedule} className={`card-body card-text-height ${toggleMode == 'dark'? 'text-light' : 'text-dark' }`}>
                            <h5 className="card-title">Upcoming classes  <i className="fa-solid fa-calendar-days"></i></h5>
                            <div className='pb-2'>
                                <h6 className={`card-subtitle mb-2 ${toggleMode == 'dark' ? 'text-light' : 'text-dark'}`}>Today's Classes</h6>
                                <div className="card border-0  my-2 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex card-event text-light justify-content-start   align-items-center">
                                            <p className="card-text text-center fs-5" style={{ marginBottom: '3px' }}><i className="fa-solid fa-graduation-cap"></i></p>
                                            <p className='card-text text-center fw-semibold   px-3 '>CSE2001: AB-507 | 10:05 AM</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card border-0  my-2 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex card-event text-light justify-content-start   align-items-center">
                                            <p className="card-text text-center fs-5" style={{ marginBottom: '3px' }}><i className="fa-solid fa-graduation-cap"></i></p>
                                            <p className='card-text text-center fw-semibold   px-3 '>CSD4008: AB-301 | 02:50 PM</p>
                                        </li>
                                    </ul>
                                </div>
                                <h6 className={`card-subtitle mb-2 ${toggleMode == 'dark' ? 'text-light' : 'text-dark'}`}>Tomorrow's Classes</h6>
                                <div className="card border-0  my-2 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex card-event text-light justify-content-start   align-items-center">
                                            <p className="card-text text-center fs-5" style={{ marginBottom: '3px' }}><i className="fa-solid fa-graduation-cap"></i></p>
                                            <p className='card-text text-center fw-semibold   px-3 '>MAT3008: AB-205 | 8:30 AM</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card border-0  my-2 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex card-event text-light justify-content-start   align-items-center">
                                            <p className="card-text text-center fs-5" style={{ marginBottom: '3px' }}><i className="fa-solid fa-graduation-cap"></i></p>
                                            <p className='card-text text-center fw-semibold   px-3 '>ENG1004: LC-201 | 02:50 PM</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card border-0  my-2 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex card-event text-light justify-content-start   align-items-center">
                                            <p className="card-text text-center fs-5" style={{ marginBottom: '3px' }}><i className="fa-solid fa-graduation-cap"></i></p>
                                            <p className='card-text text-center fw-semibold   px-3 '>ASE2010: ARCH-003 | 04:20 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-0  p-3">
                    <div className={`card card-scroll card-borders ${toggleMode == 'dark' ? 'card-login card-scroll' : 'card-login-light card-scroll-light'}`} style={{ overflowY: 'auto' }}>
                        <div className={`card-body card-text-height ${toggleMode == 'dark'? 'text-light' : 'text-dark' }`}>
                            <h5 className="card-title">Meet Faculty  <i className="fa-solid fa-chalkboard-user"></i></h5>
                            <h6 className={`card-subtitle ${toggleMode == 'dark' ? 'text-light' : 'text-dark'}`}>Schedule a meet with your Faculty</h6>
                            <div className="d-flex justify-content-evenly p-2 mt-2 card-event card  align-items-center">
                                <p className="card-text text-white text-center fs-3" style={{ marginBottom: '3px' }}>
                                    <button onClick={handleModalMeet} className='btn border-0 p-0 bg-transparent '>
                                        <i className="fa fa-plus-circle fs-3  " aria-hidden="true">
                                        </i>
                                    </button>
                                </p>
                                <p className="card-text text-white fw-semibold  text-center">Schedule</p>
                            </div>
                            <hr />
                            <div className='pb-2'>
                                <h6 className={`card-subtitle ${toggleMode == 'dark' ? 'text-light' : 'text-dark'}`}>Scheduled meetings</h6>
                                <div className="card border-0  my-2 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex card-event text-light justify-content-start align-items-center">
                                            <i className="fa-regular fa-clock"></i>
                                            <p className='card-text text-center fw-semibold   px-3 '>Today | 10012</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card border-0  my-2 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex card-event text-light justify-content-start align-items-center">
                                            <i className="fa-regular fa-clock"></i>
                                            <p className='card-text text-center fw-semibold   px-3 '>Tomorrow | 10076</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card border-0  my-2 ">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex card-event text-light justify-content-start align-items-center">
                                            <i className="fa-regular fa-clock"></i>
                                            <p className='card-text text-center fw-semibold   px-3 '>8-3-2024 | 10076</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* second row */}
                <div className="d-flex justify-content-between p-0 mt-4  align-items-center">
                    <h1 className={`${toggleMode == 'dark' ? 'text-white' : 'text-dark'} px-3 fs-3 fw-bold`}>Registered Courses</h1>
                    <div className="d-flex justify-content-between px-5 align-items-center">
                        <button className=" position-relative  carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <i className={`fs-3 btn-css fa-solid ${toggleMode == 'dark'? 'text-light' : 'text-dark'} fa-circle-left`}></i>
                        </button>
                        <button className="carousel-control-next position-relative" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <i className={`fs-3 btn-css fa-solid ${toggleMode == 'dark'? 'text-light' : 'text-dark'} fa-circle-right`}></i>
                        </button>
                    </div>

                </div>

                <CarouselWithCards />
                <Modal showMeet={showModalMeet} setShowModalMeet={setShowModalMeet} showSchedule={showModalSchedule} setShowModalSchedule={setShowModalSchedule} />
            </div>
        </div>

    )
}

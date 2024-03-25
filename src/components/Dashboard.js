import React, { useContext } from 'react'
import Attendance from './Graphs/Attendance'
import SubAttendance from './Graphs/SubAttendance'
import CGPA from './Graphs/CGPA'
import { UserContext } from '../context/UserContext'
// import Attendance

export default function Dashboard() {

const {toggleMode} = useContext(UserContext)
    return (
        <div className="container " >
            <div className="row mt-0 ">
                <h1 className={`${toggleMode == 'dark' ? 'text-white' : 'text-dark'} p-3 fs-2 fw-bold`}>Dashboard</h1>
                <div className="col-md-8 p-3 pt-0 ">
                    <div className={` card  ${toggleMode == 'dark' ? 'card-spotlight card-borders card-scroll' : 'card-spotlight-light card-scroll-light card-borders-light '}  `} style={{ height: '40vh', overflowY: 'auto' }}>
                        <div className={`card-body card-text-height ${toggleMode == 'dark' ?'text-light' : 'text-dark'}`}>
                            <h5 className='card-title'>Overall CGPA </h5>
                            <div className="my-5">

                                <CGPA />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-0  p-3">
                    <div className={`card  ${toggleMode == 'dark' ? 'card-login card-scroll card-borders' : 'card-login-light card-borders-light card-scroll-light'}`}  style={{ overflowY: 'auto' }}>
                        <div className={`card-body card-text-height ${toggleMode == 'dark' ?  'text-light' : 'text-dark'}`}>
                            <h5 className='card-title'>Current CGPA</h5>
                            <h1 className={`text-center cgpa mt-5 fw-bold p-0 ${toggleMode == 'dark' ?  'text-white' : 'text-dark' }`} >7.96</h1>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 pt-0  p-3">
                    <div className={`card  ${toggleMode == 'dark' ? 'card-login card-scroll card-borders' : 'card-login-light card-borders-light card-scroll-light'}`} style={{ overflowY: 'auto' }}>
                        <div className={`card-body card-text-height ${toggleMode == 'dark' ?  'text-light' : 'text-dark'}`}>
                            <h5 className='card-title'>Attendance Percentage</h5>
                            <div className="my-5">
                                <SubAttendance />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 p-3 pt-0 ">
                    <div className={`card  ${toggleMode == 'dark' ? 'card-login card-scroll card-borders' : 'card-login-light card-borders-light card-scroll-light'}`} style={{ height: '40vh', overflowY: 'auto' }}>
                        <div className={`card-body card-text-height ${toggleMode == 'dark' ?  'text-light' : 'text-dark'}`}>
                            <h5 className='card-title'>Attendance : Winter Sem 2023</h5>
                            <div className="my-5">

                                <Attendance />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

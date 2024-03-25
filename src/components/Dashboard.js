import React from 'react'
import Attendance from './Graphs/Attendance'
import SubAttendance from './Graphs/SubAttendance'
import CGPA from './Graphs/CGPA'
// import Attendance

export default function Dashboard() {

  




    return (
        <div className="container " >
            <div className="row mt-0 ">
                <h1 className='text-white p-3 fs-2 fw-bold'>Dashboard</h1>
                <div className="col-md-8 p-3 pt-0 ">
                    <div className=" card card-borders card-spotlight card-scroll " style={{ height: '40vh', overflowY: 'auto' }}>
                        <div className="card-body card-text-height text-light">
                            <h5 className='card-title'>Overall CGPA </h5>
                            <div className="my-5">

                                <CGPA />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-0  p-3">
                    <div className="card card-borders card-login card-scroll" style={{ overflowY: 'auto' }}>
                        <div className="card-body card-text-height text-light">
                            <h5 className='card-title'>Current CGPA</h5>
                            <h1 className='text-center cgpa mt-5 fw-bold p-0 text-white '>7.96</h1>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 pt-0  p-3">
                    <div className="card card-borders card-login card-scroll" style={{ overflowY: 'auto' }}>
                        <div className="card-body card-text-height text-light">
                            <h5 className='card-title'>Attendance Percentage</h5>
                            <div className="my-5">
                                <SubAttendance />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 p-3 pt-0 ">
                    <div className=" card card-borders card-spotlight card-scroll " style={{ height: '40vh', overflowY: 'auto' }}>
                        <div className="card-body card-text-height text-light">
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

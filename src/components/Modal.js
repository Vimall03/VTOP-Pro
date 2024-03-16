import React, { useState } from 'react'

export default function Modal(props) {
    const [search, setSearch] = useState(false);
    const handleClose = () => {
        props.setShowModalSchedule(false)
        props.setShowModalMeet(false)
        document.body.classList.remove('background-overflow-hidden');
    }
    const handleSearch = (e) => {
        e.preventDefault()
        if (search) {
            setSearch(false)
        }
        else {

            setSearch(true)
        }
    }

    return (
        <div>
            <div>
                <div className={`modal fade  ${props.showMeet ? 'show d-block' : ''}`} tabIndex="-1">
                    <div className="modal-dialog modal-lg  modal-dialog-centered">
                        <div className="modal-content text-white modal-bg">
                            <div className="modal-header">
                                <h5 className="modal-title">Schedule a meeting</h5>
                                <button type="button" className="btn-close  text-white " data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body px-5 " style={{height: '30vh'}}>
                                {search ? <>
                                    <div className="d-flex justify-content-between ">
                                        <div className='my-3'>
                                            <h6>Faculty Name: XXXX XXXXX</h6>
                                            <h6>Faculty ID: XXXX</h6>
                                            <h6>Faculty Cabin Number: XXXX</h6>
                                        </div>
                                        <button onClick={handleSearch} className='btn btn-outline-primary  text-white align-self-start  '><i class="fa fa-search" aria-hidden="true"></i></button>
                                    </div>


                                    <div className="row">
                                        <p>Select Date & Time</p>
                                        <div className="col">
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className="col">
                                            <input type="time" className="form-control" />
                                        </div>
                                    </div>
                                </> :
                                    <>
                                        <p>Search Faculty by Name</p>
                                        <form className="d-flex my-3 " >
                                            <input className="form-control me-2" type="search" placeholder="Ex. Dr.John Doe..." aria-label="Search" />
                                            <button className="btn btn-outline-success" onClick={handleSearch} >Search</button>
                                        </form>
                                    </>}



                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={handleClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={handleClose} className="btn btn-primary">Schedule</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div className={`modal fade  ${props.showSchedule ? 'show d-block' : ''}`} tabIndex="-1">
                    <div className="modal-dialog modal-lg  modal-dialog-centered">
                        <div className="modal-content text-white modal-bg">
                            <div className="modal-header">
                                <h5 className="modal-title">Time Table Summer Semester - 2024</h5>
                                <button type="button" className="btn-close  text-white " data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            {/* modalbody  */}
                            <div className="modal-footer">
                                <button type="button" onClick={handleClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={handleClose} className="btn btn-primary">Schedule</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

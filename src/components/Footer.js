import React from 'react'

export default function Footer() {
    return (
        <div className="bg-black  p-5 mt-5 ">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4  align-items-center">
                    <span className="mb-3 mb-md-0 text-white ">© 2024 Vellore Institute Of Technology, India</span>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <h6 className='text-white'>Available on <i class="fa fa-apple fs-5 " aria-hidden="true"></i> App Store & <i class="fa-brands fa-google-play" aria-hidden="true"></i> Play Store</h6>                    
                </div>


                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-white" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="ms-3"><a className="text-white" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li className="ms-3"><a className="text-white" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                </ul>
            </footer>

        </div>

    )
}
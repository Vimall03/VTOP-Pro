import React from 'react';
import logo from '../Assets/Vitlogo.png'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function Login(props) {
    const navigate = useNavigate()
    const handleLogin=()=>{
            
            navigate('/Main')
    }

    return (
        <>
        <Navbar/>
        <div className='container p-5 '>
            <div className="row mt-5 justify-content-center">
                <div className="card bg-black  mb-3" style={{ maxWidth: 750 }}>
                    <div className="row g-0">
                        <div className="col-md-5 p-3 d-flex align-content-center justify-content-center ">
                            <img src={logo} className="img-fluid  rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body text-white">
                                <h5 className="card-title">{props.loginType.title}</h5>
                                <p className="card-text">{props.loginType.desc}</p>
                                <div className="input-group mb-3 flex-nowrap">
                                    <input type="text" className="form-control " placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                    <span className="input-group-text span-width text-center " id="addon-wrapping"><i className="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <span className="input-group-text span-width text-center  " id="addon-wrapping"><i className="fa fa-eye" aria-hidden="true"></i></span>
                                </div>
                                <div className='text-end'>
                                    <button type='submit' onClick={handleLogin} className='btn btn-primary '>Login</button>
                                </div>
                                <p className="card-text my-0 "><a href="/" className="text-text-decoration-underline   text-white">Forgot Password?</a></p>
                                <p className="card-text"><a href="/" className="text-text-decoration-underline   text-white">Contact Support?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

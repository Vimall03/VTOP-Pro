import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LandingPage(props) {
    const navigate = useNavigate()
    const handelStudentLogin=()=>{
        props.setLoginType({
            'title': 'Student Login',
            'desc': 'Welcome back, Student! Please enter your credentials to access your account.',
        })
        navigate('/Login');
    }
    const handelEmployeeLogin=()=>{
        props.setLoginType({
            'title': 'Employee Login',
            'desc': 'Welcome back, Employee! Please enter your credentials to access your account.',
        })
        navigate('/Login');
    }
    const handelParentLogin=()=>{
        props.setLoginType({
            'title': 'Parent Login',
            'desc': 'Welcome back, Parent! Please enter your credentials to access your account.',
        })
        navigate('/Login');
    }
    const handelAluminiLogin=()=>{
        props.setLoginType({
            'title': 'Alumini Login',
            'desc': 'Welcome back, Alumini! Please enter your credentials to access your account.',
        })
        navigate('/Login');
    }
    return (
        <div>
            <div className="container">
                <div className=' p-5'>
                    <h1 className='fw-bolder text-white text-center'>VTOP: Elevating Excellence</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 p-3">
                            <div id='student' className="card card-borders card-login">
                                <div className="card-body card-text-height text-light">
                                    <h5 className="card-title">Student</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Empowering Students for Success</h6>
                                    <p className="card-text ">Access your academic journey with ease. Log in here to explore courses, grades, schedules, and connect with peers and faculty.</p>
                                </div>
                                <div className="card-body text-light">
                                    <button type="button" onClick={handelStudentLogin} className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='employee' className="card card-borders card-login">
                                <div className="card-body card-text-height text-light">
                                    <h5 className="card-title">Employee</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Efficiency in Professional Endeavors</h6>
                                    <p className="card-text ">Unlock your professional tools and resources. Log in here to manage tasks, access administrative features, and collaborate with colleagues.</p>
                                </div>
                                <div className="card-body text-light">
                                    <button type="button" onClick={handelEmployeeLogin} className="btn btn-warning">Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='parent' className="card card-borders card-login">
                                <div className="card-body card-text-height text-light">
                                    <h5 className="card-title">Parent</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Partnering for Your Child's Success</h6>
                                    <p className="card-text ">Stay connected with your child's education. Log in here to view progress reports, communicate with teachers, and stay informed about school events.</p>
                                </div>
                                <div className="card-body text-light">
                                    <button type="button" onClick={handelParentLogin} className="btn btn-success">Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div id='alumini' className="card card-borders card-login">
                                <div className="card-body card-text-height text-light">
                                    <h5 className="card-title ">Alumini</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis ">Preserving Memories, Building Connections</h6>
                                    <p className="card-text ">Reconnect with your alma mater. Log in here to access alumni benefits, stay updated on reunions and events, and engage with fellow graduates.</p>
                                </div>
                                <div className="card-body text-light">
                                    <button type="button" onClick={handelAluminiLogin} className="btn btn-info">Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 p-3">
                            <div className="mt-4 card card-borders card-spotlight">
                                <div className="card-body  text-light">
                                    <h5 className="card-title">Vellore Institute of Technology (VIT), India - Spotlight</h5>
                                    <h6 className="card-subtitle mb-2 text-secondary-emphasis">Spotlight: Discover the latest achievements, events, and stories shaping our community at VTOP.</h6>
                                    <div className="card-text mt-3 ">
                                        <table class="custom-table ">
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><i class="fa-solid fa-hashtag"></i></th>
                                                    <td>
                                                        Ranked among the top 601-700 Universities of the world and one among the top 3 Institutions in India (Shanghai ARWU Ranking 2022)</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><i class="fa-solid fa-hashtag"></i></th>
                                                    <td>
                                                        The 8th best University, the 11th best research institution and the 11th best engineering institution in India (NIRF Ranking, Govt. of India 2023)</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><i class="fa-solid fa-hashtag"></i></th>
                                                    <td colspan="2">Engineering and Technology subject areas of VIT are the 240th best in the World and the 9th best in India, eight subjects of VIT are within the top 500 in the world (as per QS World University Rankings by Subject 2023)</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><i class="fa-solid fa-hashtag"></i></th>
                                                    <td>
                                                        NAAC Accreditation with A++ grade (3.66 out of 4)</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><i class="fa-solid fa-hashtag"></i></th>
                                                    <td colspan="2">
                                                        Ranked within the top 200 Universities in Asia (QS - Asia University Rankings 2023)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

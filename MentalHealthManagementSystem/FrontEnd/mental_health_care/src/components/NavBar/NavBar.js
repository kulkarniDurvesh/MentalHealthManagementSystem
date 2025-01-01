import React, { useContext, useEffect,useState } from 'react';
import './style.css';
import './header.scss';
import './Reactive.css';
import $ from 'jquery'
import { Route, Link } from 'react-router-dom';
import userContext from '../../context/user/userContext'
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {

    const[role,setRole] = useState('');

    const context = useContext(userContext);

    useEffect(() => {
        setRole(localStorage.getItem('role'))
        if (localStorage.getItem('token') != null) {
            context.toggleLogin(true);
        }
        // alert(context.login + " role = "+role)
    })

    const history = useHistory();

    const logoutHandler = () => {
        localStorage.clear();
        context.toggleLogin(false);
        alert('logged out')
        history.push('/')
    }


    $(document).ready(function () {
        $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active')
            $('.menu').toggleClass('active')
        })
    })


    return (


        <div>
            <div className="top-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="logo">
                                <h1>Mental Health Care</h1>
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="top-sec-main">
                                <div className="top-sec">
                                    <ol>
                                        <li>
                                        <i className="bi bi-clock"></i>
                                            <span>open on mon-fri</span>8:00-19:00
                                        </li>
                                        <li>
                                        <i className="bi bi-headset"></i>
                                            <span>call for consultation</span>123.456.789
                                        </li>
                                    </ol>
                                </div>
                                <div className="top-sec-2">
                                    <ol>
                                        <li><i className ="bi bi-facebook"></i></li>
                                        <li><i className ="bi bi-twitter"></i></li>
                                        <li className="last"><i className="bi bi-google"></i></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_main_nav">
                <div className="container ">
                    <div className="row nlink-02">
                        <div className="nav">
                            <div className="logo-01">
                                <h1 style={{color:'white'}}>ITS OK TO TALK</h1>
                            </div>
                            <div className="menu-toggle"><i className ="bi bi-list menutog"></i></div>
                            <div className="my-nav">
                                <div className="menu">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/About">About Us</Link></li>
                                        <li><Link to="/Blogs">Blog</Link></li>
                                        <li><Link to="/contactUs">Contact Us</Link></li>
                                        <li><Link to="/FreeEvaluation">Free Evaluation</Link></li>


                                        <li style={context.login && role === 'ROLE_ADMIN' ? {} : {display: 'none'}}><Link  to="/Admin">Dashboard</Link></li>
                                        <li style={context.login && role === 'ROLE_DOCTOR' ? {} : {display: 'none'}}><Link  to="/DoctorProfile">Profile</Link></li>
                                        <li style={context.login && role === 'ROLE_USER' ? {} : {display: 'none'}}><Link  to="/DoctorProf">Find Doctors</Link></li>
                                    

                                        {/* <li><Link to ="/Signup">SignUp</Link></li> */}
                                        <span className='nlink-02'>
                                            <li className="link-01" style={context.login ? { display: 'none' } : {}}><Link to="/Login">Login</Link></li>
                                            <li className="link-01" style={context.login ? { display: 'none' } : {}}><Link to="/Signup">Sign Up</Link></li>

                                            <li className="link-01" style={context.login ? {} : { display: 'none' }}>
                                            <i className ="bi bi-person-circle dpro-edit "/> &nbsp;
                                                Hello ,{localStorage.getItem('userName')} <Link to="/" onClick={logoutHandler}>Logout</Link></li>
                                        </span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )

}

export default NavBar
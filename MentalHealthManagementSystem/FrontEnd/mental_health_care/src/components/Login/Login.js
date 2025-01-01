import React, { useState,useContext,useEffect } from 'react'
import './login.css'

import './quotes.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import UserContext from '../../context/user/userContext'
import { Link } from 'react-router-dom';

const Login = (props) => {

    const context = useContext(UserContext);
    const{login,toggleLogin} = context;

    const baseUrl = "http://localhost:9090/api/";


    let history = useHistory();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('ROLE_USER');


    useEffect(()=>{

        if(localStorage.getItem('token') != null) {
            toggleLogin(true);
        }
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const obj = {
            userName: userName,
            password: password
        }
        console.log(obj)

        axios.post(baseUrl + "signin", obj) //url , object, config

        .then((response) => {
            console.log(response);
            console.log(response.data.jwt)
            localStorage.setItem('userName', response.data.userName)
            localStorage.setItem('role',response.data.roles[0])
            toggleLogin(true);
            //props.showAlert('Logged in successfully')
            
            if(role === 'ROLE_USER' && response.data.roles[0] === 'ROLE_USER'){
                localStorage.setItem('token', response.data.jwt)
                history.push('/DoctorProf')
            }
            else if(role === 'ROLE_DOCTOR' && response.data.roles[0] === 'ROLE_DOCTOR'){
                localStorage.setItem('token', response.data.jwt)
                history.push('/DoctorProfile')
            }
            else if(role === 'ROLE_ADMIN' && response.data.roles[0] === 'ROLE_ADMIN'){
                localStorage.setItem('token', response.data.jwt)
                history.push('/Admin')
            }
            else{
                toggleLogin(false);
                history.push('/login')
            }
            
        }).catch((error) => {
            console.log(error);
            props.showAlert("Invalid Credentials",'danger')
            setUserName('');
            setPassword('');
        })
        console.log(role)
    }

    const onToggleHandler = (e)=>{
        if(role === 'ROLE_ADMIN'){
            setRole('ROLE_USER')
        }
        else{
            setRole('ROLE_ADMIN')
        }
        
    }
    return (

        <>
            <div className='spf'>

                <div className="row lmar">
                    <div className="container1 col">
                        <div className="box">
                            <form onSubmit={onSubmitHandler}>
                                <div className="form-check form-switch foradmin">
                                    <input className="form-check-input" type="checkbox" id="mySwitch" name="admin" value="yes" onChange={onToggleHandler}/>
                                        <label className="text-dark" htmlFor="mySwitch">Admin</label>
                                </div>
                                <h1>Login</h1>
                                <div className="user">

                                    <div className="d-flex flex-row bd-highlight mb-3">
                                        <div className="p-2 bd-highlight"><img src="d1.jpg" className={role == 'ROLE_DOCTOR' ? 'onroleselect' : 'img'} onClick={() => setRole('ROLE_DOCTOR')} /></div>
                                        <div className="p-2 bd-highlight"><img src="d2.jpg" className={role == 'ROLE_USER' ? 'onroleselect' : 'img'} onClick={() => setRole('ROLE_USER')} /></div>
                                    </div>
                                    <i className="fas fa-user"></i>
                                    <span id="s2"></span>
                                    <input type="text" name="t2" id="t2" value={userName} placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />

                                    <i className="fas fa-user"></i>
                                    <span id="s5"></span>
                                    <input type="password" name="t5" id="t5" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                                </div>

                                <div className="login-btn1">
                                    <input type="submit" className="btn1" value="Login" />
                                </div>
                                <div className="mt-4">
                                    <p>Not Register?<Link to="/signup"> Sign Up </Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col mt-5">
                        <img src="mhhb.png" />
                    </div>
                </div>

                <br></br>
             
            </div>
                
        </>

    );
}



export default Login
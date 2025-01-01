import './Signup.css'
import $ from 'jquery'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Validate } from './Validate.js'
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
      
    const baseUrl = "http://localhost:9090/api/";

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [gender,setGender] = useState('MALE');
    const [specialization,setSpecialization] = useState('MD');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [res, setRes] = useState({});
    const [roles, setRoles] = useState(['ROLE_USER']);
    const [formErrors, setFormErrors] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const history = useHistory();

    function doctor() {

        $(document).ready(function () {
            $("#user").css("left", "-400px");
            $("#doctor").css("left", "50px");
            $("#btn").css("left", "110px");
        })

        setRoles(['ROLE_DOCTOR'])
    }

    function user() {
        $(document).ready(function () {
            $("#user").css("left", "50px");
            $("#doctor").css("left", "450px");
            $("#btn").css("left", "0px");
        })

        setRoles(['ROLE_USER'])
    }

    const onSubmitHandler = (e) => {

        e.preventDefault();

        const obj = {
            email: email,
            userName: userName,
            password: password,
            conPassword:conPassword,
            fullName: fullName,
            mobileNo: mobileNo,
            roles: roles,
            gender:gender,
            specialization:specialization
        }

        console.log(obj)
        const err = Validate(obj);
        setFormErrors(err);
        console.log(err)
        if(Object.keys(err) != 0) {

        }
        else{
            setFormErrors({});
            console.log('ok i am here')
            axios.post(baseUrl + "signup", {
                email: email,
                userName: userName,
                password: password,
                fullName: fullName,
                mobileNo: mobileNo,
                roles: roles,
                gender:gender,
                specialization:specialization
            }).then((response) => {
                setRes(response);
                props.showAlert('Account Created successfully','success')
                history.push('/login')

            }).catch(error => {
                console.log(error);
                props.showAlert('Username already exists','danger')
            })
                setUserName('')
                setPassword('')
                setEmail('')
                setFullName('')
                setConPassword('')
                setMobileNo('')
        }

        

        console.log(res);
    }

    return (
        <>
            <div>
                <div className="upmain">
                    <div className="upform-box">
                        <div className="upbtn-box">
                            <div id="btn"></div>
                            <button type="button" className="uptoggle-btn" onClick={user}>USER</button>
                            <button type="button" className="uptoggle-btn" onClick={doctor}>DOCTOR</button>
                        </div>

                        <form id="user" className="upinput-group" onSubmit={onSubmitHandler}>
                            <input type="text" name="userName" className="upinput-field" value={userName} placeholder="Username" required onChange={(e) => setUserName(e.target.value)} /><span className = "signupspan">{formErrors.userName}</span>
                            <input type="text" name="full-name" className="upinput-field" value={fullName} placeholder="Full Name" required onChange={(e) => setFullName(e.target.value)} /><span className = "signupspan">{formErrors.fullName}</span>
                            <input type="email" name="email" className="upinput-field" value={email} placeholder="Email" required onChange={(e) => setEmail(e.target.value)} /><span className = "signupspan">{formErrors.email}</span>
                            {/* <input type="number" className="upinput-field" placeholder="OTP - sent to email" /> */}
                            {/* <button type="submit" className="#" onClick={emailVerification}>verify</button> */}

                            <input type="text" className="upinput-field" placeholder="Mobile Number" value={mobileNo} required onChange={(e) => setMobileNo(e.target.value)} /><span className = "signupspan">{formErrors.mobileNo}</span>
                            <input type="password" className="upinput-field" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} /><span className = "signupspan">{formErrors.password}</span>
                            <input type="password" className="upinput-field" placeholder="Confirm Password" value={conPassword} required onChange={(e) => setConPassword(e.target.value)} /><span className = "signupspan">{formErrors.conPassword}</span>
                            
                            <br /><br /><br />
                            <div>
                                <button type="submit" className="upsubmit-btn" >USER SIGNUP</button>
                            </div>
                        </form>

                        <form id="doctor" className="upinput-group" onSubmit={onSubmitHandler}>
                            <input type="text" className="upinput-field" placeholder="Username" required onChange={(e) => setUserName(e.target.value)} /><span className = "signupspan">{formErrors.userName}</span>
                            <input type="text" className="upinput-field" placeholder="Full Name" required onChange={(e) => setFullName(e.target.value)} /><span className = "signupspan">{formErrors.fullName}</span>
                            <input type="email" className="upinput-field" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} /><span className = "signupspan">{formErrors.email}</span>
                            <input type="text" className="upinput-field" placeholder="Mobile Number" required onChange={(e) => setMobileNo(e.target.value)} /><span className = "signupspan">{formErrors.mobileNo}</span>
                            
                            <select className="upinput-field" onChange={(e)=>setGender(e.target.value)}>
                            <option defaultValue="None">--SELECT GENDER--</option>
                                <option value="MALE" >Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHERS">Others</option>
                            </select><span className = "signupspan">{formErrors.gender}</span>
                            
                            <select className="upinput-field" onChange={(e)=>setSpecialization(e.target.value)}>
                                <option defaultValue="None" >--SPECIALIZATION--</option>
                                <option value="MD">MD</option>
                                <option value="PSYCHIATRIST">Psychiatrist</option>
                                <option value="COUNSELLOR">Counsellor</option>
                                <option value="THERAPIST">Therapist</option>
                            </select><span className = "signupspan">{formErrors.specialization}</span>
                            <input type="password" className="upinput-field" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} /><span className = "signupspan">{formErrors.password}</span>
                            <input type="password" className="upinput-field" placeholder="Confirm Password" required onChange={(e) => setConPassword(e.target.value)} /><span className = "signupspan">{formErrors.conPassword}</span>
                            
                            <div className="mt-4">
                                <br />
                                <button type="submit" className="upsubmit-btn">DOCTOR SIGNUP</button>
                            </div>
                        </form>

                    </div>

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div >

        </>
    )
}
export default Signup;
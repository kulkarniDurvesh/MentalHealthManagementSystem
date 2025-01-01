import React from "react";
import { useState, useEffect } from "react";
import './DoctorProf.css'
import $ from 'jquery';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const imgArr = [];
const DoctorProf = () => {

    let history = useHistory();


    const baseURL = 'http://localhost:9090/users/'

    const [doctor, setDoctor] = useState([])
    const [image, setImage] = useState([]);

    const imgArr = [];
    useEffect(async () => {

            //get all doctors details
            await axios.get(baseURL + "all/doctors", {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then((response) => {
                    console.log(response.data)
                    setDoctor(response.data)
                })
                .catch((error) => {
                    console.log(error);
                })

            //get all doctors images
            doctor.map((ele, index) => (

                axios.get(baseURL + "doctorsimage/" + ele.userName, {

                    responseType: 'blob',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                }).then((response) => {

                    console.log(response.data)

                    const reader = new FileReader();
                    reader.readAsDataURL(response.data);

                    reader.onloadend = () => {
                        const base64data = reader.result;
                        console.log(base64data)
                        setImage([...image, base64data])
                    }

                }).catch((error) => {
                    console.log(error);
                })
            ))
        }, [])



    const [choosenId, setChoosenId] = useState('');


    function onclickHandler(e, index) {
        console.log("buttonClicked");

        setChoosenId(index);
        console.log(choosenId);

        $(`#c${index}`).toggleClass("off")

    }

    const onBookAppointment = (user, full) => {
        localStorage.setItem('doctorUserName', user)
        localStorage.setItem('doctorFullName', full)
        console.log(full)
        history.push('/BookAppointment')
    }


    return (
        <>

            <div className="container d-flex dpro-edit justify-content-end mt-5">
                
                <div class="dropdown">
                    <button class="btn btn-dark " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-pencil-fill" /> USER
                    </button>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><Link class="dropdown-item" to="/EditUserProfile">Edit Profile</Link></li>
                        <li><Link class="dropdown-item" to="/ChangePassword">Change Password</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row ">

                {doctor.map((ele, index) => (


                    <div className="pmain pcenter dp text-dark col"
                        key={index}
                        onClick={(e) => onclickHandler(e, index)}
                    >
                        <div className="pbox pcenter">
                            <img src={image[index]} alt="" />
                            <div>
                                <p className="puser_name text-dark">Dr. {ele.doctorName}</p>
                                <p className="pskill text-dark">{ele.specialization}</p>
                            </div>
                            <button type="button" className="btn btn-outline-dark dc" onClick={() => onBookAppointment(ele.userName, ele.doctorName)}>Book Appointment</button>
                            <div className="parr_container pcenter">
                                <i className="bi bi-arrow-down-right" id={`arr${index}`} ></i>
                            </div>


                            <div className="pleft_container off" id={`c${index}`} >
                                <p>Information</p>

                                <div className="pskills">
                                    <div>{ele.gender}</div>
                                    <div>{ele.specialization}</div>
                                    <div>{ele.email}</div>
                                    <div>{ele.mobileNo}</div>
                                </div>
                                <div className="pcancel pcenter">
                                    {/* <!-- <i className="fas fa-times"></i> --> */}
                                    <i className="bi bi-x" id={`crx${index}`} ></i>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>



        </>
    )

}
export default DoctorProf
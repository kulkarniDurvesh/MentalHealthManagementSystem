import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import ProfilePic from '../images/userProf.png'
function EditUserProfile() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');

    const baseURL = 'http://localhost:9090/users'


    useEffect(() => {

        axios.get(`${baseURL}/details/${localStorage.getItem('userName')}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            console.log(response);
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            setMobileNo(response.data.mobileNo)
        })
            .catch((error) => {
                console.log(error);
            })
    },[])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const formValue = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNo: mobileNo,
            userName: localStorage.getItem('userName')
        }
        console.log(formValue);

        axios.post(`${baseURL}/update/profile`, formValue, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            console.log(response)
            swal(response.data)
        })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <>

            <div className="container rounded bg-white mt-5">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={ProfilePic} width="90" /><span className="font-weight-bold">{firstName} {lastName}</span><span className="text-black-50">{email}</span></div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>

                                </div>
                                <h6 className="text-right">Edit Profile</h6>
                            </div>
                            <form onSubmit={onSubmitHandler}>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        First Name:
                                        <input type="text" className="form-control" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        Last Name:
                                        <input type="text" className="form-control" value={lastName} placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        Email:
                                        <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        Mobile number:
                                        <input type="text" className="form-control" value={mobileNo} placeholder="Mobile number" onChange={(e) => setMobileNo(e.target.value)} />
                                    </div>
                                </div>

                                <div className="mt-5 text-right"><button type="submit" className="btn btn-primary profile-button">Save Profile</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditUserProfile
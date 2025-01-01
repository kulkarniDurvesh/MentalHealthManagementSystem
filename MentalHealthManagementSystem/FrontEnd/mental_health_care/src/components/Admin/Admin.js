import React,{useRef} from "react";
import './Admin.css'
import { useState } from 'react'
import axios from 'axios'
import VerifiedDoctors from "./VerifiedDoctors";
import UnVerifiedDoctors from "./UnVerifiedDoctors";
import Patients from "./Patients";
import DoctorsComparisionChart from "./DoctorsComparisionChart";

const Admin = () => {

    const [verifiedDoctors, setVerifiedDoctors] = useState(null);
    const [unverifiedDoctors, setUnVerifiedDoctors] = useState(null);
    const [patient, setPatient] = useState(null);
    const [dataD, setData] = useState(null);

    const scrollToRef = (ref) => window.scrollTo(5, ref.current.offsetTop) 

    const baseURL = "http://localhost:9090/admin/"

    const patientHandler = (e) => {

        scrollToRef(myRef)
        axios.get(`${baseURL}patients`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(response.data);
            setVerifiedDoctors(null)
            setUnVerifiedDoctors(null)
            setData(null)
            setPatient(response.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const verifyDoctorsHandler = (e) => {

        scrollToRef(myRef)
        axios.get(baseURL + "unverified/doctors", {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response.data);
                setUnVerifiedDoctors(response.data)
                setVerifiedDoctors(null)
                setPatient(null)
                setData(null)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const doctorsHandler = (e) => {

        scrollToRef(myRef)
        axios.get(baseURL + "verified/doctors", {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response.data);
                setVerifiedDoctors(response.data);
                setUnVerifiedDoctors(null)
                setPatient(null)
                setData(null)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const myRef = useRef(null)
    const pieChartHandler = () => {

        
        scrollToRef(myRef)

        axios.get(`${baseURL}doctors/comparision`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            console.log(response)
            setData(response.data)
            setVerifiedDoctors(null);
            setUnVerifiedDoctors(null);
            setPatient(null);
        }).catch((error) => {
            console.log(error)
        })


    }

    return (
        <>
            <div className="asf adminbody mt-5">

                <div className="container Admin">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="aphoto">
                            <input type="button" value="Patients" className="btn btn-dark btn-lg abutton" onClick={patientHandler} />

                        </div>
                        <div className="aphoto">
                            <input type="button" value="Verify Doctors" className="btn abcolor btn-lg abutton" onClick={verifyDoctorsHandler} />
                        </div>
                        <div className="aphoto">
                            <input type="button" value="Doctors" className="btn btn-secondary btn-lg abutton" onClick={doctorsHandler} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <div className="aphoto h-100 p-100">
                            <input type="button" value="Compare Doctors" className="btn btn-dark btn-lg abutton h-25" onClick={pieChartHandler} />
                        </div>
                    </div>
                    
                </div>
                <div className="container mt-5" ref={myRef}>
                    {verifiedDoctors !== null ?
                        <VerifiedDoctors data={verifiedDoctors} />
                        : ''}
                </div>

                <div className="container mt-5" ref={myRef}>
                    {unverifiedDoctors !== null ?
                        <UnVerifiedDoctors data={unverifiedDoctors} />
                        : ''}
                </div>

                <div className="container mt-5" ref={myRef}>
                    {patient !== null ?
                        <Patients data={patient} />
                        : ''}
                </div>

                <div className="container mt-5" ref={myRef}>
                    {dataD !== null ?
                        <DoctorsComparisionChart dataD={dataD} focus/>
                        : ''}
                </div>
            </div>

        </>





    )

}
export default Admin
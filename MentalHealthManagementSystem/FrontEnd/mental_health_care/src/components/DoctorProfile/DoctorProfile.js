import React from 'react'
import './DoctorProfile.css'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Dp from '../images/doctorprofile.jpg'

const DoctorProfile = () => {

    const [patient, setPatient] = useState([]);
    const [doctorsName, setDoctorsName] = useState('');
    const [doctor, setDoctor] = useState('')
    const [timeSlot,setTimeSlot] = useState('')

    useEffect(() => {
        //get image of doctor
        axios.get("http://localhost:9090/doctors/image/" + localStorage.getItem('userName'), {

            responseType: 'blob',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        }).then((response) => {

            const reader = new FileReader();
            reader.readAsDataURL(response.data);

            reader.onloadend = () => {
                const base64data = reader.result;
                //console.log(base64data)
                setImage(base64data);
            };
        })

        //get doctors Details
        axios.get("http://localhost:9090/doctors/" + localStorage.getItem('userName'), {

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        }).then((response) => {
            console.log("------------------------------------")
            console.log(response)
            setDoctor(response.data)
        }).catch((error) => {
            console.log(error)
        })


        //get patients attached with perticular doctor
        console.log('reaching here')
        axios.get("http://localhost:9090/doctors/patient/" + localStorage.getItem('userName'), {

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        }).then((response) => {
            console.log(response.data)
            setPatient(response.data)
            setDoctorsName(response.data[0].doctorsName)
        })
            .catch((error) => {
                console.log(error)
            })

    }, [])



    const [image, setImage] = useState(Dp);
    const [document, setDocument] = useState('')

    const inputElement = useRef();
    const uploadImage = () => {
        const userName = localStorage.getItem('userName');

        console.log(image)
        const body = new FormData();
        body.append('userName', userName)
        body.append('imageFile', image)

        axios.post("http://localhost:9090/doctors/upload/image",
            body
            , {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem('token'),
                    'content-type': 'Application/json'
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const uploadDocument = (e) => {
        console.log('in document upload ' + document)
        const userName = localStorage.getItem('userName');
        console.log(image)

        const body = new FormData();
        body.append('documentFile', document);
        body.append('userName', userName);

        axios.post("http://localhost:9090/doctors/upload/documents", body
            , {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem('token'),
                    'content-type': 'Application/json'
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const getTime = (time)=>{

        //EIGHT_TEN_AM,ELEVEN_ONE_PM,TWO_FOUR_PM,FIVE_SEVEN_PM
        if(time === 'EIGHT_TEN_AM'){
            return "8AM - 10AM"
        }
        else if(time === 'ELEVEN_ONE_PM'){
            return '11AM - 01PM'
        }
        else if(time === 'TWO_FOUR_PM'){
            return '02PM - 04PM'
        }
        else if(time === 'FIVE_SEVEN_PM'){
            return '05PM - 07PM'
        }
        else{
            return 'No Time Slot'
        }
        
    }
    return (

        <>
            <div className='dpf' style={{ height: '200vh' }}>
                <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#EAEBED", height: "18em" }}>

                    <div className="d-flex">
                        <div className="container">
                            <br></br>
                            <br></br>
                            <h1 className="display-4">Dr. {doctor.doctorName} &nbsp;
                                {doctor.verified ?
                                    <i className="bi bi-patch-check-fill" style={{ color: "#13274F", fontSize: '2rem' }} data-toggle="popover" title="Verified Doctor" ></i> :
                                    <i className="bi bi-x-octagon-fill" style={{ color: "red", fontSize: '2rem' }} data-toggle="popover" title="Unverified Doctor"></i>}
                            </h1>
                        </div>

                        <div className="ml-auto p-2">
                            <h3 className="display-7">Upload Your Documents</h3>
                            <div className="input-group ">
                                <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={(e) => setDocument(e.target.files[0])} />
                                <button className="btn btn-outline-secondary h-25" type="button" id="inputGroupFileAddon04" onClick={uploadDocument}>Upload</button>
                                &nbsp;&nbsp;<i className="bi bi-info-circle " data-toggle="popover" title={`please upload  ${'\n'} 1.Qualification Certificate ${'\n'} 2.Experience Certificate ${'\n'} in one pdf`}></i>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
                <div className='b'>
                    <img src={image} className="rounded-circle" alt="Fox in forest" height={"200px"} width={"200px"} onClick={() => inputElement.current.click()} />
                    <input type='file' hidden ref={inputElement} onChange={(e) => setImage(e.target.files[0])} />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type='button' className='btn btn-dark' onClick={uploadImage}>save</button>
                </div>

                {patient.map((ele, index) => (
                    <div className="container dcontainer d-flex justify-content-center" key={index}>

                        <div className="d p-3 d-flex justify-content-between ml-3">
                            <h5>{ele.patientName} </h5>
                            <h5 className='dmar' >{ele.appointmentDate} </h5>
                        </div>
                        <div className='p-3'>
                            <input type="button" value={getTime(ele.timeSlot)} className="btn11 w-75" />
                        </div>

                    </div>
                ))}

                    {patient.length === 0 ? 
                <div className="container dcontainer d-flex justify-content-center" >

                    <div className="d p-3 d-flex justify-content-center ml-3">
                        <h5>No Appointment for You</h5>
                        <h5 className='dmar' > </h5>
                    </div>
                    
                </div>
                : null}
            </div>

        </>




    )


}
export default DoctorProfile


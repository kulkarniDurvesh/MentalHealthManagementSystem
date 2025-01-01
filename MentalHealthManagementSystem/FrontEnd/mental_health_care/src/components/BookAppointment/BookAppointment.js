import react from "react";
import { useState, useEffect } from 'react';
import './BookAppointment.css'
import './datepicker.css'
import {Validate} from './Validate.js';
import { useHistory } from "react-router-dom";
import useRazorpay from "react-razorpay";
import swal from 'sweetalert';
import axios from 'axios'


const BookAppointment = () => {

    const [formErrors, setFormErrors] = useState({});
    const [fullName, setFullName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const[date,setDate] = useState('');
    const[address,setAddress] = useState('');
    const[city,setCity] = useState('');
    const[state,setState] = useState('');
    const[pinCode,setPinCode] = useState('');
    const[timeSlot,setTimeSlot] = useState('');

    const[orderId,setOrderId] = useState('');
    const[paymentId,setPaymentId] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formValues = {
            fullName:fullName,
            mobileNo:mobileNo,
            email:email,
            date:date,
            address:address,
            city:city,
            state:state,
            pinCode:pinCode,
            timeSlot:timeSlot
        }
        console.log(formValues);
        setFormErrors(Validate(formValues));
    };

    //-----------------------------------------------------------------------------------

    const Razorpay = useRazorpay();

    const API_URL = "http://localhost:9090/users/create_order"
    let amount = 50000;
    const body = new FormData()
    body.append('amount', amount)


    const paymentStart = async () => {
        console.log("payment Started");
        const response = await axios.post(API_URL, body, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })

        console.log(amount);
        console.log(API_URL);
        console.log(response);


        if (response.status == "200") {

            //open payment form

            let options = {
                key: "rzp_test_XXpyFKv0mhkN1r",
                amount: "50000",
                currency: "INR",
                name: "MHCMS",
                description: "Book Appointment with Doctor",
                image: "https://st3.depositphotos.com/10480338/15370/v/950/depositphotos_153703422-stock-illustration-mh-letter-business-branding-vector.jpg",
                order_id: response.id,

                handler: function (res) {
                    console.log(res);
                    console.log(response);
                    console.log("in handler res")
                    console.log(res.razorpay_payment_id);
                    console.log(response.data.id);
                    console.log(response.data.status);
                    setPaymentId(res.razorpay_payment_id);
                    setOrderId(response.data.id);
                    var status = "paid";

                    console.log('payment successfull on razorpay')

                    updatePaymentOnServer(res.razorpay_payment_id, response.data.id, "created");


                },
                prefill: {
                    name: "Durvesh Kulkarni",
                    email: "durveshkulkarni55@gmail.com",
                    contact: ""
                },
                notes: {
                    address: ""
                },
                theme: {
                    color: "#3399cc"
                }
            };



            let rzp = new Razorpay(options);

            rzp.on('payment.failed', function (response) {
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);

                alert("payment failed");
            });

            rzp.open();



        }
    }
    //-----------------------------------------------------------------------------------

    const UPDATE_URL = "http://localhost:9090/users/update_order"
    const updatePaymentOnServer = (payment_id, order_id, status) => {

        const body1 = new FormData()
        body1.append('payment_id', payment_id)
        body1.append('order_id', order_id)
        body1.append('status', status)
        console.log(body1);

        axios.post(UPDATE_URL, body1, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            console.log(response)
            

            // private String patientName,mobileNo,email,area,city,state,pinCode;
            // private String doctorsUserName;
            // private LocalDate appointMentDate;

            const formValues = {
                patientName:fullName,
                mobileNo:mobileNo,
                email:email,
                appointMentDate:date,
                area:address,
                city:city,
                state:state,
                pinCode:pinCode,
                doctorsUserName:localStorage.getItem('doctorUserName'),
                orderId:order_id,
                timeSlot:timeSlot,
                status:"paid",
                userName:localStorage.getItem('userName'),

            }

            console.log(formValues)

            axios.post("http://localhost:9090/users/book_appointment",formValues,{
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response)=>{
                console.log(response)
                swal("Good job!", "congrates !! Payment successfull !!", "success");
            }).catch((error)=>{
                swal("Time Slot Full Please Book Another Slot")
                console.log(error.message)
            })

        }).catch((error) => {
            swal("Payment Failed");
        });



    }
    //=========================================================================================
    return (

        <>
            
            <div className="binner-layer">
                <div className="container">
                    <div className="row bno-margin">
                        <div className="col-sm-7">
                            <div className="bcontent">
                                <h1 className="batc">Book You Slot Now and Save your time</h1>
                                <p style={{ color: "orange" }}>“The only thing more exhausting than having a mental illness is pretending like you don’t.. </p>
                                <p className="batc">For Help Call : +91-11-2616 5959</p>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <form onSubmit={handleSubmit}>
                                <div className="bform-data">
                                    <div className="bform-head">
                                        <h2>Book Appointment</h2>
                                    </div>
                                    <div className="bform-body">
                                        <div className="row bform-row">
                                            <input type="text" placeholder={`${localStorage.getItem('doctorFullName') == null ? 'Please select doctor first' : 'Dr. ' + localStorage.getItem('doctorFullName')} `} disabled />
                                        </div>
                                        <div className="row bform-row">
                                            <input type="text" name="fullname" placeholder="Enter Full name" className="bform-control" required value={fullName} onChange={(e)=>setFullName(e.target.value)} /><span className = "baspan">{formErrors.fullname}</span>
                                        </div>
                                        <div className="row bform-row">
                                            <input type="text" name="mobile" placeholder="Enter Mobile Number" className="bform-control" required value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} />  <span className = "baspan">{formErrors.mobile}</span>
                                        </div>
                                        <div className="row bform-row">
                                            <input type="email" name="email" placeholder="Enter Email Adreess" className="bform-control" required value={email} onChange={(e)=>setEmail(e.target.value)} /><span className = "baspan">{formErrors.email}</span>
                                        </div>
                                        <div className="row bform-row">
                                            <input id="dat" type="date" name="date" placeholder="Appointment Date" className="bform-control" required onChange={(e)=>setDate(e.target.value)}/><span className = "baspan">{formErrors.date}</span>
                                        </div>
                                        <div className="row bform-row" >
                                           <select className="bform-control" style={{height: '25px'}} onChange={(e)=>setTimeSlot(e.target.value)}>
                                               <option defaultValue="none">--TIME SLOT--</option>
                                               <option value="EIGHT_ELEVEN_AM">8AM to 10AM</option>
                                               <option value="ELEVEN_ONE_PM">11AM to 1PM</option>
                                               <option value="TWO_FOUR_PM">2PM to 4PM</option>
                                               <option value="FIVE_SEVEN_PM">5PM to 7PM</option>
                                           </select>
                                           {/* EIGHT_ELEVEN_AM,ELEVEN_ONE_PM,TWO_FOUR_PM,FIVE_SEVEN_PM */}
                                        </div>

                                        <h6 className="mt-3">Address Details</h6>

                                        <div className="row bform-row mt-3">
                                            <div className="col-sm-6">
                                                <input type="text" name="address" placeholder="Enter Area" className="bform-control" onChange={(e)=>setAddress(e.target.value)}/>

                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="city" placeholder="Enter City" className="bform-control" required value={city} onChange={(e)=>setCity(e.target.value)} /><span className = "baspan">{formErrors.city}</span>
                                            </div>
                                        </div>
                                        <div className="row bform-row">
                                            <div className="col-sm-6">
                                                <input type="text" name="state" placeholder="Enter State" className="bform-control" required value={state} onChange={(e)=>setState(e.target.value)} /><span className = "baspan">{formErrors.state}</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="pinCode" placeholder="Postal Code" className="bform-control" required value={pinCode} onChange={(e)=>setPinCode(e.target.value)} /><span className = "baspan">{formErrors.pinCode}</span>
                                            </div>
                                        </div>

                                        <div className="row bform-row">
                                            <button className="btn btn-success bbtn-appointment" onClick={paymentStart}>
                                                Book Appointment (Rs. 500)
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>




    )


}
export default BookAppointment
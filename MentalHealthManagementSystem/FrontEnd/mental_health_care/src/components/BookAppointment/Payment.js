import React from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import useRazorpay from "react-razorpay";
import swal from 'sweetalert';


const Payment = () => {


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
                    var payment_id = res.razorpay_payment_id;
                    var order_id = response.data.id;
                    var status = "paid";

                    console.log('payment successfull on razorpay')

                    updatePaymentOnServer(res.razorpay_payment_id, response.data.id, "paid");


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
            swal("Good job!", "congrates !! Payment successfull !!", "success");

        }).catch((error) => {
            swal("Payment Failed");
        });



    }






    return (

        <div>

            <div>
                <h5>Hello manu</h5>
                <div className="card" style={{ "width": "18rem" }}>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={paymentStart}>Pay 500Rs</button>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

        </div>

    )

}
export default Payment



























































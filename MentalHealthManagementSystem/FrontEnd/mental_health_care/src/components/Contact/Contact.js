import React, { useState,useRef  } from "react";
import swal from 'sweetalert';
import emailjs from "emailjs-com"

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    console.log("in sendEmail")
    emailjs.sendForm('service_c1nz7ne', 'template_zg7tvrn', e.target,
      'm6IhwwP2O4s2AjN4c')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    swal("message recorded!!! Thank you")
    e.target.reset();
  };



  return (
    <>
      <div id="title"> CONTACT US</div><br></br>
      <section className="contactus-section text-light">
        <div className="container">

          <div className="row">

            <div className="col-12 col-lg-10 mx-auto">


              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">

                  <h1 className="main-heading fw-bold text-light">

                    Reach Out To Our Team.
                  </h1>
                  <p className="main-hero-para">
                    Please fill out the form to ask us questions, get more information, or book a demo and our team will be in touch with you soon!
                  </p>
                  <figure>
                    <img
                      src="./contact2.webp"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                <form onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"

                          className="form-control"
                          placeholder="First Name" required />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"

                          className="form-control"
                          placeholder="Last Name" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"

                          className="form-control"
                          placeholder="Phone Number " required />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"

                          className="form-control"
                          placeholder="Email ID" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"

                          className="form-control"
                          placeholder="Add Address" required />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"

                          className="form-control"
                          placeholder="Enter Your Message" required />
                      </div>
                    </div>
                    

                    <button type="submit"
                      className="buttton-contact mt-3 btn btn-secondary"> Submit </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact;
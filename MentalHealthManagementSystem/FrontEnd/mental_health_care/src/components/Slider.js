import React from 'react'
import './Slider.css'
import { Link } from 'react-router-dom';


function slider() {

   
    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active sjumbo">
                    {/* <img src="quotes14.jpg" className="d-block w-100" alt="..." /> */}
                    <div className="jumbotron d-block w-100 sjumbob ">
                        <div className="d-flex justify-content-center">
                            <h1 className="display-4 sheadmar">"Its OK to Talk"</h1>
                        </div>
                        <p className="lead d-flex justify-content-center ">
                            {/* <button className="btn btn-dark btn-lg learn-more " href="#" role="button">Blogs</button> */}
                            <Link className="cta" to="/BookAppointment">
                                <span>Book Appointment</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    {/* <img src="qoutes13.png" className="d-block w-100" alt="..." /> */}
                    <div className="jumbotron d-block w-100 sjumbob1 ">
                        <div className="d-flex justify-content-center">
                            <h1 className="display-4 sheadmar">"Take Free Evaluation"</h1>
                        </div>
                        <p className="lead d-flex justify-content-center ">
                        <Link className="cta" to="/FreeEvaluation">
                                <span>Evaluate</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    {/* <img src="quotes15.jpg" className="d-block w-100" alt="..." /> */}
                    <div className="jumbotron d-block w-100 sjumbob2 ">
                        <div className="d-flex justify-content-center">
                            <h1 className="display-4 sheadmar">"Improve your Mental Health"</h1>
                        </div>
                        <p className="lead d-flex justify-content-center ">
                        <Link className="cta" to="/Blogs">
                                <span>Read Blogs</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )







}
export default slider
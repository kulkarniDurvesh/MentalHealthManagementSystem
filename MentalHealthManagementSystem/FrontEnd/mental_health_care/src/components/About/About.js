import './About.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';



const About = () => {


    return (
        <>


            <div>
                <div className='aboutus'>
                    <h1>About Us</h1>
                    <h3>Mental Health Care is one of the leading Mental Care PAN India,
                        <br></br>   established for the  acute management and community <br></br>
                        based psycho social rehabilitation of the mentally ill. </h3>
                </div>
                {/* 1 Card Content */}
                <div className='imag'><img src='./about.png'></img></div>
                <div className="card-a">

                    <div className="card-a-1">
                        <div className='card-heading'>
                            <h1>Goal and Objectives</h1>
                        </div>
                        <div className='card-content'>

                            <h3>
                                1) Providing Psychosocial Rehabilitation   services to the individuals suffering from mental illness.<br></br><br></br>
                                2) Offering Psychological and Social Support to the families of the mentally ill.<br></br><br></br>
                                3) Promoting Mental Health and creating Awareness about mental illness in the community.<br></br><br></br>
                                4) Networking with other organizations working in the field of Mental Health.
                            </h3>
                        </div>

                    </div>
                    {/* end 1 Card Content */}


                </div>
                <div className="card-b">

                    <div className="card-b-1">

                        <div className='card-heading'>
                            <h1>Future Plans</h1>
                        </div>
                        <div className='card-content'>
                            <h3>
                                1) To undertake Research on Mental Illness and Allied Disorders.<br></br><br></br>
                                2) To start a Child Guidance Clinic.<br></br><br></br>
                                3) To publish Literature on Psychosocial Rehabilitation.<br></br><br></br>
                                4) To start a Residential Care Centre for wandering Mentally Ill.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="card-c">

                    <div className="card-c-1">

                        <div className='card-heading'>
                            <h1>why choose Us</h1>
                        </div>
                        <div className='card-content'>
                            <h3>
                                1) Patient-centric continuity of care.<br></br><br></br>
                                2) Allied healthcare specialists.<br></br><br></br>
                                3) A personalized approach to care delivered by a strong network of healthcare professionals.<br></br><br></br>

                            </h3>
                        </div>
                    </div>
                </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            </div>
           
        </>
    )
}
export default About;
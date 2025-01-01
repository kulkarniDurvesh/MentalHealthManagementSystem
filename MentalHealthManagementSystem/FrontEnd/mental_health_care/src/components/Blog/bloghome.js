import React from 'react'
import NavBar from '../NavBar/NavBar'

import './style.css'
import { Link } from 'react-router-dom'



const bloghome = () => {

    return (

        <>
        

            <header>
                <div className="banner">
                    <div className="container">
                        <h1 className="banner-title">
                            Seek Help !!!
                        </h1>
                        <p>True suffering is being trapped in your own head.</p>

                    </div>
                </div>
            </header>



            <section className="design" id="design">
                <div className="container">
                    <div className="title">
                        <h2>Bridges to Recovery Blog</h2>

                    </div>

                    <div className="design-content">
                        {/* <!-- item --> */}
                        <div className="design-item">
                            <div className="design-img">
                                <img className="hpimg" src="images/m21.jpg" alt=""/>
                                    <span><i className="far fa-heart"></i> 22</span>
                                    <span></span>
                            </div>
                            <div className="design-title">
                                <Link to ="/Blogs/Page1">5 Ways Social Media Is Affecting Your Mental Health</Link>
                            </div>
                        </div>
                        {/* <!-- end of item --> */}

                        {/* <!-- item --> */}
                        <div className="design-item">
                            <div className="design-img">
                                <img className="hpimg" src="images/m22.jpg" alt=""/>
                                    <span><i className="far fa-heart"></i> 152</span>
                                    <span></span>
                            </div>
                            <div className="design-title">
                                <Link to = "/Blogs/Page2">Dealing With the Loss of a Loved One Right Before the Holidays</Link>
                            </div>
                        </div>
                        {/* <!-- end of item --> */}
                        {/* <!-- item --> */}
                        <div className="design-item">
                            <div className="design-img">
                                <img className="hpimg" src="images/m23.jpg" alt=""/>
                                    <span><i className="far fa-heart"></i> 972</span>
                                    <span></span>
                            </div>
                            <div className="design-title">
                                <Link to = "/Blogs/Page3">Living With Co-Occurring Borderline Personality Disorder and Depression</Link>
                            </div>
                        </div>
                        {/* <!-- end of item --> */}
                        {/* <!-- item --> */}
                        <div className="design-item">
                            <div className="design-img">
                                <img className="hpimg" src="images/m24.jpg" alt=""/>
                                    <span><i className="far fa-heart"></i> 92</span>
                                    <span></span>
                            </div>
                            <div className="design-title">
                                <a href="https://www.healthyplace.com/blogs/breakingbipolar/2012/04/how-do-i-tell-my-parents-i-need-mental-health-help">How Do I Tell My Family I Have Anxiety and Need Help? 5 Tips for Seeking Support</a>
                            </div>
                        </div>
                        {/* <!-- end of item --> */}
                        {/* <!-- item --> */}
                        <div className="design-item">
                            <div className="design-img">
                                <img className="hpimg" src="images/m25.jpg" alt=""/>
                                    <span><i className="far fa-heart"></i> 105</span>
                                    <span></span>
                            </div>
                            <div className="design-title">
                                <a href="https://www.bridgestorecovery.com/blog/6-tips-for-helping-your-spouse-with-social-anxiety/">Tips for Helping Your Spouse with Social Anxiety</a>
                            </div>
                        </div>
                        {/* <!-- end of item --> */}
                        {/* <!-- item --> */}
                        <div className="design-item">
                            <div className="design-img">
                                <img className="hpimg" src="images/m26.jpg" alt=""/>
                                    <span><i className="far fa-heart"></i> 22</span>
                                    <span></span>
                            </div>
                            <div className="design-title">
                                <a href="https://www.apa.org/monitor/2019/05/ce-corner-isolation">Can Isolation Cause Social Anxiety? How Treatment in Community Supports Recovery</a>
                            </div>
                        </div>
                        {/* <!-- end of item --> */}
                    </div>
                </div>
            </section>



            <section className="blog" id="blog">
    <div className="container">
      <div className="title">
        <h2>Latest Blog</h2>
        <p>recent blogs about mental Care</p>
      </div>
      <div className="blog-content">

        {/* <!-- item --> */}
        <div className="blog-item">
          <div className="blog-img">
            <img className="hpimg" src="images/m5.jpg" alt=""/>
            <span><i className="far fa-heart"></i></span>
          </div>
          <div className="blog-text">
            <span>18 January, 2022</span>
            <h2 className='text-light'>Cognitive Distortion - Emotional Reasoning</h2>
            <p>Drawing conclusions from your emotional state can cause your emotional state to be even worse.</p>
              <br></br>
              <a href="https://www.healthline.com/health/cognitive-distortions#catastrophizing">Read More</a>
          </div>
        </div>
        {/* <!-- end of item -->
        <!-- item --> */}
        <div className="blog-item">
          <div className="blog-img">
            <img className="hpimg" src="images/mental_care3.jpg" alt=""/>
            <span><i className="far fa-heart"></i></span>
          </div>
          <div className="blog-text">
            <span>8 February, 2022</span>
            <h2 className='text-light'>Mental Health and Coping During COVID-19</h2>
            <p>The outbreak of coronavirus 2019 (COVID-19) can be emotionally very stressful. So, here are some</p>
            <a href="https://www.helpguide.org/articles/anxiety/coronavirus-anxiety.htm#:~:text=Go%20easy%20on%20yourself%20if,and%20manage%20your%20mood.">Read More</a>
          </div>
        </div>
        {/* <!-- end of item -->
        <!-- item --> */}
        <div className="blog-item">
          <div className="blog-img">
            <img className="hpimg" src="images/m8.jpg" alt=""/>
            <span><i className="far fa-heart"></i></span>
          </div>
          <div className="blog-text">
            <span>1 march, 2022</span>
            <h2 className='text-light'>Getting Started to Beat Procrastination</h2>
            <p>We all procrastinate from time to time. When we're in a low mood we can be especially vulnerable
              Quaerat.</p>
            <a href="https://jamesclear.com/procrastination">Read More</a>
          </div>
        </div>
        {/* <!-- end of item -->
        <!-- item --> */}
        <div className="blog-item">
          <div className="blog-img">
            <img className="hpimg" src="images/m14.jpg" alt=""/>
            <span><i className="far fa-heart"></i></span>
          </div>
          <div className="blog-text">
            <span>10 March, 2022</span>
            <h2 className='text-light'>Setbacks Don't Have to Be Fatal</h2>
            <p>"Success is not final, failure is not fatal. It is the courage to continue that counts." - Winston
              Churchill.</p>
            <a href="https://www.getmoodfit.com/post/2017/05/22/failure-is-not-fatal">Read More</a>
          </div>
        </div>
        {/* <!-- end of item -->
        <!-- item --> */}
        <div className="blog-item">
          <div className="blog-img">
            <img className="hpimg" src="images/m17.jpg" alt=""/>
            <span><i className="far fa-heart"></i></span>
          </div>
          <div className="blog-text">
            <span>07 DEcember, 2021</span>
            <h2 className='text-light'>Just Because You Think it Doesn't Make it a Fact</h2>
            <p>When you're in a lower mood it can be challenging to remember that just because you think something
              doesn't mean it's</p>
            <a href="https://inspiremetoday.com/brilliance/just-because-you-think-it-doesnt-mean-its-true/">Read More</a>
          </div>
        </div>
        {/* <!-- end of item -->
        <!-- item --> */}
        <div className="blog-item">
          <div className="blog-img">
            <img className="hpimg" src="images/m18.jpg" alt=""/>
            <span><i className="far fa-heart"></i></span>
          </div>
          <div className="blog-text">
            <span>19 January, 2022</span>
            <h2 className='text-light'>Reduce Stress with Square Breathing</h2>
            <p>From time to time we all need a quick way to destress. A great way to do this is a simple</p>
            <a href="https://www.healthline.com/health/box-breathing">Read More</a>
          </div>
        </div>
        {/* <!-- end of item --> */}
      </div>
    </div>
  </section>
  {/* <!-- end of blog --> */}

  {/* <!-- about --> */}
  <section className="about" id="about">
    <div className="container">
      <div className="about-content">
        <div>
          <img className="hpimg" src="images/m19.jpg" alt=""/>
        </div>
        <div className="about-text">
          <div className="title" id="tit">
            <h3>A Look at Mood and Mental Health: Our Core Values</h3>

          </div>
          <p>A good place to start is to look at mood/emotional wellness/mental health through the lens of our core
            values, since
            these influence the products we build. So here they are along with some extra narrative.
            - We believe that literally everyone needs some emotional help from time to time and that we're not that
            different from
            one another.
            Life gives us all ups and downs. Very few people are so blessed with great parenting, great brain chemistry,
            and no significant
            negative events in their lives. The remaining 99.9% of us need some help now and then.
            - We believe there isn’t a one-size-fits-all solution to mood and that trying different tools and
            documenting their results
            is critical to understand what works for you.
            There are many tools and treatments to help people with the health of their moods including psychotherapies
            like CBT and
            numerous anti-depressants (too many to list), as well as lifestyle factors like sleep hygiene, exercise,
            sunlight exposure and more. We all respond differently both in terms of how these treatments effect their
            mood and the potential side effects. It's all about a willingness to try different tools,
            not giving up if the first one doesn't work (as is often the case), and documenting your results. </p>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- end of about --> */}

  {/* <footer>
    <span>Thank You</span>
  </footer> */}





        </>




    )

}
export default bloghome
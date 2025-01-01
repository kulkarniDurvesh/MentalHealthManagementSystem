import React from 'react'
import './cards.css'


function Cards() {

    return (

        <div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 card" >
                <article className="_kl_cd">
                    <div className="_i-tr1">
                        <img className  = "homeimg" src="service-1.jpg" />
                    </div>
                    <div>
                        <h4 align="center">Deperssion</h4>
                        <p>Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest... </p>
                    </div>
                </article>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 card" >
                <article className="_kl_cd">
                    <div className="_i-tr">
                        <div className="_i-tr1">
                            <img className  = "homeimg" src="service-2.jpg" />
                        </div>
                    </div>
                    <div>
                        <h4 align="center">Relationship Issue</h4>
                        <p>Life transitions, such as moving from living together to being married, having a baby, children leaving ...</p>
                    </div>
                </article>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 card" >
                <article className="_kl_cd">
                    <div className="_i-tr1">
                        <img className  = "homeimg"src="service-3.jpg"/>
                    </div>
                    <div>
                        <h4 align="center">Anxiety</h4>
                        <p>Anxiety disorders are a type of mental health condition. Anxiety makes it difficult to get through ...</p>
                    </div>
                </article>

            </div>

        </div>



    )





}
export default Cards;
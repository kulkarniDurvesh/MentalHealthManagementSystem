import React from 'react'
import './cards.css'


function Cards(){

    return(

        <div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-6 card" >
        <article className="_kl_cd">
            <div className="_i-tr1">
                <img className  = "homeimg" src="doctor7.jpg"/>
            </div>
            <div>
                <h3 align="center"> Dr. Ramachandra </h3>
               
            </div>
        </article>
        
    </div>
    
    <div className="col-lg-4 col-md-4 col-sm-6 col-6 card" >
        <article className="_kl_cd">
            <div className="_i-tr1">
                <img className  = "homeimg" src="doctors1.jpg"/>
            </div>
            <div>
                <h3 align="center"> Dr.Alison Gopnik </h3>
                
            </div>
        </article>
        
    </div>
    <div className="col-lg-4 col-md-4 col-sm-6 col-6 card" >
        <article className="_kl_cd">
            <div className="_i-tr">
                <div className="_i-tr1">
                <img className  = "homeimg" src="doctor6.jpg"/>
                </div>
            </div>
            <div>
                <h3 align="center">Dr.Richard Wiseman</h3>
                
            </div>
        </article>
        
    </div>

    

    </div>
    


    )





}
export default Cards;
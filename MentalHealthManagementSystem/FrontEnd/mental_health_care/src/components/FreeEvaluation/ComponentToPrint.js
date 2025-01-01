import React, { Component } from 'react';
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import './QuestBox.css'
import './OptionButtons.css'


const ComponentToPrint = (props) => {
    let componentRef = useRef();
    const HandlerPrint = useReactToPrint({
        content: () => componentRef.current,
    });



    return (
        <>
            <div ref={componentRef}>
                <br></br>
                <br></br>
                <hr></hr>
                <div className="cptable">
                    {console.log(props.resultSet)}
                    <table cellPadding="10px">

                        {props.resultSet.map(ele =>


                            <tr>
                                <th><div className='qbcss'>{ele.Ques}</div></th>
                                <th> <div className='answerBtn qabutton rsbtn'>{ele.Ans}</div></th>
                            </tr>


                        )}

                        

                    </table>

                   <h2 style={{textAlign:'center'}}> Your Score is  {props.score}/40 </h2>

                    {/* {this.props.Q1.map(ele =>(
                   <div> <div>{ele.Ques}</div>
                    <div>{ele.Ans}</div>
                    </div>
                )
                    )} */}
                </div>
            </div>
            {/* <ComponentToPrint ref={componentRef} /> */}
            <button className='btn btn-primary' onClick={HandlerPrint}>print this</button>
        </>
    )

}


export default ComponentToPrint;
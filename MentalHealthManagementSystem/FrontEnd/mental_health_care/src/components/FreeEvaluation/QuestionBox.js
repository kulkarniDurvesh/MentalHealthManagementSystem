import React, { useState } from "react";
// import "../style.css";
import './QuestBox.css'
import './OptionButtons.css'
import $ from 'jquery'


// Function to question inside our app
const QuestionBox = ({ question, options, keyId, clicked }) => {


    const onClickHandler = (index,keyId) => {//id=0 //3

        for (var i = 0; i < 4; i++) {

        if (i != index)
        {
            console.log(index+keyId+" "+i)//1 2 3
            $(`#${i+keyId}`).css("display", "none")
			continue;
        }
        
        $(`#${i+keyId}`).prop("disabled",true)//0
        }
    }


	return (
		<div className="questionBox qbborder">
			<div className="question qbcss">{question}</div>
			{options.map((text, index) => (
				<button
					key={index}
					id={index+keyId}//0
					className="answerBtn qcbtn qabutton"
					onClick={() => {

						{ clicked(text, question) };onClickHandler(index,keyId);//0
					}}> {text}
				</button>
			))}

		</div>


	)
};

export default QuestionBox;



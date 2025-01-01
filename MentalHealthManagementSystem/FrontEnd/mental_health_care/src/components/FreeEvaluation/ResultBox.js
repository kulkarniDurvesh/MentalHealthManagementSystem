import React from 'react';
 import PrintComponent from './PrintComponent';
import ComponentToPrint from './ComponentToPrint';
import './QuestBox.css'
import { Link } from 'react-router-dom';



// import "../style.css";

const Result = ({score, playAgain,Q1}) => (
<>
<br></br>
    <table>
    <tr><td>🔴 00-10 </td><td style={{textAlign:'left'}}><span style={{color:"red"}}>&nbsp;Very Poor Score.</span></td><td><h6><span style={{color:"blue"}}>&nbsp;<Link to="/DoctorProf">Book Now</Link></span></h6></td></tr>
    <tr><td>🟠 10-20</td><td style={{textAlign:'left'}}><span style={{color:"orange"}}>&nbsp;Below Average Score.</span></td><td><h6><span style={{color:"blue"}}>&nbsp;<Link to="/DoctorProf">Book Now</Link></span></h6></td></tr>
    <tr><td>🟡 20-30</td><td style={{textAlign:'left'}}><span style={{color:"yellow"}}>&nbsp;On Average Score.</span></td><td><h6><span style={{color:"blue"}}>&nbsp;<Link to="/DoctorProf">Book Now</Link></span></h6></td></tr>
    <tr><td>🟢 30-40</td><td style={{textAlign:'left'}}><span style={{color:"#bfff00"}}>&nbsp;Above Aerage Score.</span></td><td><h6><span style={{color:"blue"}}>&nbsp;<Link to="/DoctorProf">Book Now</Link></span></h6></td></tr>
    </table>
<div className="score-board ">
	<div className="score"> Your score is {score} / 40 correct answer ! ! ! </div>
	<button className="playBtn btn btn-success" onClick={playAgain} > Test Again </button>
	{/* {Q1.map(ele =>
		<ComponentToPrint ques={ele.Ques } ans={ele.Ans}/>
	)} */}
	<ComponentToPrint resultSet={Q1} score={score} />
	
	{/* <PrintComponent /> */}

	
</div>
</>
)

export default Result;

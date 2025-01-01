import React, { Component } from "react";
import questionAPI from './question';
import QuestionBox from './QuestionBox';
import Result from './ResultBox';
import './QuestBox.css'

class AssessmentApp extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
      resultArray: [],
      // resultJSon:[
      //   {Ques:" ",Ans:" "}
      // ]

    };
    this.computeAnswer = this.computeAnswer.bind(this);
  }


  // Function to get question from ./question
  getQuestions = () => {
    questionAPI().then(question => {
      this.setState({ questionBank: question });
    });
  };

  // Set state back to default and call function
  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 , resultArray: []});
    
  };





  // Function to compute scores
  computeAnswer = (answer, question) => {
    console.log("in comput ans" + answer);
    console.log("in compute ans ques is" + question)
    const obj = {
      Ques: question,
      Ans: answer
    }
    // this.state.resultJSon.Ques=question;
    // this.state.resultJSon.Ans=answer;

    this.state.resultArray.push(obj);
    this.setState({})
    console.log(this.state.resultArray);
    this.state.questionBank[0].optionlist.map((ele, index) => {
      if (answer === ele) {
        this.setState({
          score: this.state.score + index + 1
        });
      }
    });

    this.setState({
      responses: this.state.responses < 10
        ? this.state.responses + 1
        : 10
    });

  };


  // componentDidMount function to get question
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (


      <div className="container febtn">
        <div className="qctitle">
          Self-Assessment
        </div>

        {

          this.state.questionBank.length > 0 &&
          this.state.responses < 10 &&
          this.state.questionBank.map(({ question, optionlist,
            questionId }) => <QuestionBox question=
              {question} options={optionlist} keyId={questionId}
              clicked={this.computeAnswer} />)



        }










        {
          this.state.responses === 10
            ? (<Result score={this.state.score}
              playAgain={this.playAgain}
              Q1={this.state.resultArray} />)
            : null
        }

      </div>)
  }
}


export default AssessmentApp;



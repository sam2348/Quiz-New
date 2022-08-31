import React, { useState } from "react";
import axios from "axios";


function AddUser() {
  const url = "http://localhost:3001/QuestionBank"
  const [addAns,setAddAns]=useState({AnswerFirst:"",AnswerSecond:"",AnswerThird:"",AnswerFour:""});
  const [questiondata, setQuestionData] = useState({
    Question:'',
    Correct:"",
    AnswerText:[]
  });

  const onClick = (e) => {
    e.preventDefault();
    axios.post(url, {
      Question: questiondata.Question,
      Correct: questiondata.Correct,
      AnswerText: [addAns],
    });
    alert("yes")
  };
 
  const iputhandler = (event) => {
    setQuestionData((prestate) => ({
      ...prestate,
      [event.target.name]: event.target.value,
    }));
  };

  const inputhandler = (event) => {
    setAddAns((prestate) => ({
      ...prestate,
      [event.target.name]: event.target.value,
    }));
  };


  return (
    <>
      <div className="Addmovie">
        <div className="container py-5 mt-5" id="cont">
          <h1 className="text-center mb-3" Style="font-family: 'DynaPuff', cursive; Color:Black;">Add Question</h1>
          <form className="needs-validation">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="Question"
                placeholder="Enter Question"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Correct Answer"
                name="Correct"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"    
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder=" Enter First Answer"
                name="AnswerFirst"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"    
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Second Answer"
                name="AnswerSecond"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"    
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Third Answer"
                name="AnswerThird"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"    
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Four Answer"
                name="AnswerFour"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mt-3">
              <button
                class="btn btn-success" type="button"
                onClick={onClick}
                >
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
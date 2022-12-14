
import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const url = "http://localhost:3001/QuestionBank"

const temp_arr = [
                  {Answer:'', correct:false},
                  {Answer:'', correct:false},
                  {Answer:'', correct:false},
                  {Answer:'', correct:false} 
              ];

function AddUser() {
  const [questiondata, setQuestionData] = useState({ Question:'',AnswerText:''});
  const onClick = (e) => {
    e.preventDefault();
    axios.post(url, {
      Question: questiondata.Question,
      AnswerText:temp_arr,
    });
    toast.success('Question added sucessfully')
     e.target.reset();
  };

  const iputhandler = (event) => {
    setQuestionData((prestate) => ({
      ...prestate,
      [event.target.name]: event.target.value,
    }));
  };

  const inputhandler = (event, idx) => {
    temp_arr[idx]['Answer'] = event.target.value;
  };

  const cheakBoxHandler = (event, idx)=>{
    if(event.target.checked ){
      temp_arr[idx]['correct'] = true;
    }else{
      temp_arr[idx]['correct'] = false;
    }
   }

  return (
    <>
      <div><NavLink className="btn btn-outline-success ms-5 mt-5" type="button" to="/" >HomePage</NavLink></div>
      <div className="Addmovie">
        <div className="container py-5" id="cont">
          <h1 className="text-center mb-3" Style="font-family: 'DynaPuff', cursive; Color:Black;">Add Question</h1>
          <form onSubmit={onClick} >
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
             <div className="border border-dark ms-2 mt-3"> C/A </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"    
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder=" Enter First Answer"
                name="Answer"
                onChange={(event) => {
                  inputhandler(event, 0);
                }}
                required
              />
              <div className="form-check ms-3 mt-1 fs-5">
             <input className="form-check-input"  type="checkbox" name="correct" 
             id="flexCheckIndeterminate"  onChange={(event) => {
              cheakBoxHandler(event, 0);
            }} />
             <label className="form-check-label" htmlFor="flexCheckIndeterminate" >
             </label>
             </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                    
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Second Answer"
                name="Answer"
                onChange={(event) => {
                  inputhandler(event, 1);
                }}
                required
              />
              <div className="form-check ms-3 mt-1 fs-5">
             <input className="form-check-input"  type="checkbox" name="correct" id="flexCheckIndeterminate" 
             onChange={(event) => {
              cheakBoxHandler(event, 1);
            }} />
             <label className="form-check-label" htmlFor="flexCheckIndeterminate">
             </label>
             </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"  
                  
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Third Answer"
                name="Answer"
                onChange={(event) => {
                  inputhandler(event, 2);
                }}
                required
              />
              <div className="form-check ms-3 mt-1 fs-5">
             <input className="form-check-input"  type="checkbox" name="correct" 
             id="flexCheckIndeterminate" onChange={(event) => {
              cheakBoxHandler(event, 3);
            }} />
             <label className="form-check-label" htmlFor="flexCheckIndeterminate">
             </label>
             </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"    
                
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Four Answer"
                name="Answer"
                onChange={(event) => {
                  inputhandler(event, 3);
                }}
                required
              />
              <div className="form-check ms-3 mt-1 fs-5">
             <input className="form-check-input"  type="checkbox" name="correct" id="flexCheckIndeterminate"
             onChange={cheakBoxHandler} />
             <label className="form-check-label" htmlFor="flexCheckIndeterminate">
             </label>
             </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mt-3">
              <button
                className="btn btn-success" type="submit"
                >
                Button
              </button>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default AddUser;
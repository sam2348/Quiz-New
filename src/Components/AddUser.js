import React, { useState,useRef } from "react";
import axios from "axios";
const url = "http://localhost:3001/QuestionBank"


function AddUser() {
  const ref=useRef();
  const [value,setValue]=useState()
  const [storeData,setStoreData]=useState([])
  const [cheakBox,setCheakBox]=useState(false);
  const [addAns,setAddAns]=useState({Answer:"",valuec:value});
  const [questiondata, setQuestionData] = useState({ Question:'',AnswerText:[]});
  const [data,setData]=useState("")

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
    setStoreData([...storeData, addAns]);
  // setAddAns('')
  };
  console.log(value,"adddata ===================")
  const cheakBoxHandler = ()=>{
    if (cheakBox === false) {
      setCheakBox(true)
      setData(true) 
      setValue(cheakBox)
    } else {
      setCheakBox(false)
      setData(false) 
    }
  }
  console.log(cheakBox)
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
                ref={ref}
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
                  inputhandler(event);
                }}
                required
              />
              <div className="form-check ms-3 mt-1 fs-5">
             <input className="form-check-input" disabled={data} type="checkbox" value={cheakBox} id="flexCheckIndeterminate" onChange={() => cheakBoxHandler()} />
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
                placeholder="Enter Second Answer"
                name="AnswerSecond"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
              <div className="form-check ms-3 mt-1 fs-5">
             <input className="form-check-input" disabled={data} type="checkbox" value={cheakBox} id="flexCheckIndeterminate" onChange={() => cheakBoxHandler()} />
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
                name="AnswerThird"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
              <div className="form-check ms-3 mt-1 fs-5">
             <input className="form-check-input" disabled={data} type="checkbox" value={cheakBox} id="flexCheckIndeterminate" onChange={() => cheakBoxHandler()} />
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
                name="AnswerFour"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
              <div className="form-check ms-3 mt-1 fs-5">
             <input className="form-check-input" disabled={data} type="checkbox" value={cheakBox} id="flexCheckIndeterminate" onChange={() => cheakBoxHandler()} />
             <label className="form-check-label" htmlFor="flexCheckIndeterminate">
             </label>
             </div>
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
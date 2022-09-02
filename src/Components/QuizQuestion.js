import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizQuestion() {
    const url = "http://localhost:3002/QuestionBank"
    const [user, setUser] = useState([]);
    const [btnDataStore, setBtnDataStore] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [loading, setLoading] = useState(true);

    console.warn(user.Question);

    const handleAnswer = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < user.length) {
            setScore(score + 1);
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
        axios.post(url, {
            UserAnswer: btnDataStore.UserAnswer,
            user,
          });
          setBtnDataStore([])
    };

    
    
    const inputhandler = (event) => {
        setBtnDataStore(() => ({
          ...btnDataStore,
          [event.target.name]: event.target.value,
        }));
      };
      console.log(btnDataStore,"hyyy")
  
    const resetQuiz = () => {
        setScore(0);
        setShowScore(false);
        setCurrentQuestion(0);
    }

    const GetQuestion = async () => {

        try {
            const result = await axios.get("http://localhost:3001/QuestionBank");

            setUser(result.data);
            setLoading(false);
        } catch (err) {
            alert(err.message)
        }
    }
    useEffect(() => {
        GetQuestion();
    }, []);


    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <>
            {
                loading
                    ?
                    <>
                        <div>loading............</div>
                    </>
                    :
                    <>
                        {
                            showScore
                                ?
                                <>
                                    <div> <h3>You have a {score} out of {user.length}</h3></div>
                                    <button type='submit' className="btn btn-primary" onClick={resetQuiz}>Play Again</button>
                                </>
                                :
                                <>
                                    <div className='question----'>
                                        <div className='question-num'>
                                            <h3><span>Question :{currentQuestion + 1} </span> Total Question :{user.length}</h3>
                                        </div>
                                        <div className='question-text'>

                                        </div>
                                        <div className='answer'>

                                            <h4>{user[currentQuestion].Question}</h4><br />
                                            {
                                                user[currentQuestion].AnswerText.map((data, index) => {
                                                    return (
                                                        <>
                                                        <div key={index}  className="container text-start fs-5" style={{width:"400px"}} >
                                                            <div className="form-check">
                                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                <input className="form-check-input mx-3" type="radio" name="Answer" 
                                                                id="flexRadioDefault"  
                                                                // onChange={(event) => { inputhandler(event) }} value={data.AnswerFirst}
                                                                 />
                                                                {data.AnswerFirst}
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <label className="form-check-label " htmlFor="flexRadioDefault2">
                                                                <input className="form-check-input mx-3" type="radio" name="Answer" 
                                                                id="flexRadioDefault" />
                                                                {data.AnswerSecond}
                                                                </label>
                                                            </div>
                                                            <div className="form-check">   
                                                                <label className="form-check-label " htmlFor="flexRadioDefault3">
                                                                <input className="form-check-input mx-3" type="radio" name="Answer" 
                                                                id="flexRadioDefault" />
                                                                {data.AnswerThird}
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                <input className="form-check-input mx-3" type="radio" name="Answer" 
                                                                id="flexRadioDefault" />
                                                                {data.AnswerFour}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div><button type="button" className='btn btn-primary mt-3 me-5' onClick={() => handleAnswer()}>Next</button></div>
                                                </>
                                              );
                                            })
                                          }
                                    </div>
                              </div>
                          </>
                        }
                    </>
            }

        </>
    );
}

export default QuizQuestion;

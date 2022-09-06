import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizQuestion() {
    const [user, setUser] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [Seconds, setSeconds] = useState(10);
    const [minutes , setMinutes] = useState(0);

    const handleAnswer = () => {
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < user.length) {
            setCurrentQuestion(nextQuestion); 
        } else {
            setShowScore(true);
        }  
    };
    
    const handleChange =(correct)=>{
        console.log(correct)
       if(correct===true)
       {
         setScore(score+1);
       }
     }

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

    var timer;
    useEffect(()=>{

     timer =setInterval(()=>{
        setSeconds(Seconds-1);
        if(Seconds===0){
            setMinutes(minutes-1);
            setSeconds(59)
        }
        
        },1000)
        
        return()=>clearInterval(timer);
          if (currentQuestion < user.length) {
              setCurrentQuestion(currentQuestion+1); 
              } 
    });
    

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
                                <div className='text-center' >
                                    <div> <h3>You have a {score} out of {user.length}</h3></div>
                                    <button type='submit' className="btn btn-primary" onClick={resetQuiz}>Play Again</button>
                                </div>
                                </>
                                :
                                <>
                                    <div className='text-center'>
                                        <div className='question-num'>
                                            <h3><span>Question :{currentQuestion + 1} </span> Total Question :{user.length}</h3>
                                            <div ><h1 style={{height:"90px"}} className='border border-dark rounded-circle d-inline-block p-3' > {minutes<10?"0"+minutes:minutes}:{Seconds<10?"0"+Seconds:Seconds} </h1></div>
                                        </div>
                                        <div className='answer text-center'>
                                            <h4>{user[currentQuestion].Question}</h4><br />
                                            {
                                                user[currentQuestion].AnswerText.map((data, index) => {
                                                    return (
                                                        <>
                                                        <div key={index.id}  className="container text-start fs-5" style={{width:"400px"}} >
                                                            <div className="form-check">
                                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                <input className="form-check-input mx-3" type="radio" name="Answer" 
                                                                id="flexRadioDefault"
                                                                onChange={() => {handleChange(data.correct);}}
                                                                 />
                                                                 
                                                                {data.Answer}
                                                                </label>
                                                            </div>
                                                        </div>
                                                </>
                                                
                                              );
                                            })
                                          }
                                          <div><button type="button" className='btn btn-primary mt-3 me-5' onClick={() => handleAnswer()}>Next</button></div>
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

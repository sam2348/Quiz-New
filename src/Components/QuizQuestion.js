import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizQuestion() {
    const [user, setUser] = useState([]);
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [loading, setLoading] = useState(true);

    console.error(currentQuestion);

    const handleAnswer =(number)=>{
        const nextQuestion = currentQuestion+1;
        if(nextQuestion<user.length)
        {
            setScore(score+number);
            setCurrentQuestion(nextQuestion);
        }else{
          setShowScore(true);
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

            console.log(result.data)
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
                                <h3><span>Question :{currentQuestion+1} </span> Total Question :{user.length}</h3>
                            </div>
                            <div className='question-text'>
                            
                            </div>
                            <div className='answer'>
            
                               <h2>{user[currentQuestion].Question}</h2><br />
                               {
                                user[currentQuestion].AnswerText.map((data,index)=>{
                                return(
                                    <>
                                    <div class="d-grid gap-1 col-4 mx-auto mt-0">
                                    <button className="btn btn-primary" type="button" 
                                    key={index} onClick={() => handleAnswer()}>{data.Answer}</button><br/>
                                    </div>
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

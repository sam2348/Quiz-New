import React,{useState} from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import QuizQuestion from "./Components/QuizQuestion";
import Home from './Components/try/Home';

function App() {
  // const [gameState,setGameState]=useState("home")
  return (
    <div className="App">
      <h1>Quiz App</h1> 
     < QuizQuestion />
      < AddUser /> 
      < Home />
    </div>
  );
}

export default App;

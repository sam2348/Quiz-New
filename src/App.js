import React from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import QuizQuestion from "./Components/QuizQuestion";
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
         <Route path="/" element={<QuizQuestion />} />
         <Route path="/addquestion" element={<AddUser />} />
      </Routes>
    </>
  );
}

export default App;

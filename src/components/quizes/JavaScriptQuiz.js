import React, { useState,useEffect } from "react";
import Result from "../Result";
import QuestionList from "../QuestionList";
import Title from "../Title";
//import { javaScriptQuestions } from "../../data/javaScriptQuestions";
import axiosInstance from '../../axiosInstance';
import axios from 'axios';



const JavaScriptQuiz = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [javaScriptQuestions, setJavaScriptQuestions] =useState([]);
  const [loading, setLoading] =useState(false);

  useEffect(() => {
    const fetchtData = async ()=> {
    setLoading(true);
     const response = await axiosInstance.get('/javaScriptQuestions.json');
     const data = response.data;
     setJavaScriptQuestions(data);
     setLoading(false);
    }

    fetchtData();
  }, [])

  const setCalculatedScore = calculatedScore => {
    setScore(calculatedScore);
    setShowResult(true);
  };

  return (
    <div style={{ background: "#8f34eb" }}>
      <Title title="JavaScript Quiz" />
      <div className="ui container">
        {showResult && <Result score={score} />}
        <QuestionList setCalculatedScore={setCalculatedScore} questions ={javaScriptQuestions} loading ={loading} />
      </div>
    </div>
  );
};

export default JavaScriptQuiz;

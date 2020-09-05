import React, { useState,useEffect } from "react";
import Result from "../Result";
import QuestionList from "../QuestionList";
import Title from "../Title";
import { cssQuestions } from "../../data/cssQuestions";
import { withRouter} from 'react-router-dom';

const CSSQuiz = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const setCalculatedScore = calculatedScore => {
    setScore(calculatedScore);
    setShowResult(true);
  };

  return (
    <div style={{ background: "#8f34eb" }}>
      <Title title="CSS Quiz" />
      <div className="ui container">
        {showResult && <Result score={score} />}
        <QuestionList setCalculatedScore={setCalculatedScore} questions={cssQuestions} loading={loading}/>
      </div>
    </div>
  );
};

export default CSSQuiz;

import React, { useState } from "react";
import Result from "../Result";
import QuestionList from "../QuestionList";
import Title from "../Title";
import {reactQuestions} from '../../data/reactQuestions';

const ReactQuiz = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const setCalculatedScore = calculatedScore => {
    setScore(calculatedScore);
    setShowResult(true);
  };

  return (
    <div style={{ background: "#8f34eb" }}>
      <Title title="React Quiz" />
      <div className="ui container">
        {showResult && <Result score={score} />}
        <QuestionList setCalculatedScore={setCalculatedScore} questions={reactQuestions} loading = {loading} />
      </div>
    </div>
  );
};

export default ReactQuiz;

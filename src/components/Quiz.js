import React, { useState } from "react";
import Result from "./Result";
import QuestionList from "./QuestionList";
import Title from "./Title";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const setCalculatedScore = calculatedScore => {
    setScore(calculatedScore);
    setShowResult(true);
  };

  const result = showResult ? <Result score={score} /> : "";

  return (
    <div style={{ background: "#8f34eb" }}>
      <Title title="JavaScript Quiz" />
      <div className="ui container">
        {result}
        <QuestionList
          // questions={questions}
          setCalculatedScore={setCalculatedScore}
        />
      </div>
    </div>
  );
};

export default Quiz;

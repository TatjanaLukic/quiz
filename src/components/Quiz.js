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

  return (
    <div style={{ background: "#8f34eb" }}>
      <Title title="JavaScript Quiz" />
      <div className="ui container">
        {showResult && <Result score={score} />}
        <QuestionList
          // questions={questions}
          setCalculatedScore={setCalculatedScore}
        />
      </div>
    </div>
  );
};

export default Quiz;

import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { questions } from "../data/questions";

const QuestionList = props => {
  const [userAnswers, setUserAnswers] = useState(new Map());

  const userAnswersUpdate = (k, v) => {
    setUserAnswers(userAnswers.set(k, v));
  };

  const onSubmitHandler = event => {
    let calculatedScore = 0;
    event.preventDefault();
    questions.forEach(el => {
      if (el.answer === userAnswers.get(`${el.id}`)) {
        calculatedScore = calculatedScore + 10;
      }
    });
    props.setCalculatedScore(calculatedScore);
    window.scrollTo(0, 0);
  };

  const quizQuestions = questions.map(question => {
    return (
      <QuestionCard
        key={question.id}
        question={question}
        userAnswersUpdate={userAnswersUpdate}
      />
    );
  });

  return (
    <div className="ui form">
      {quizQuestions}
      <button
        className="ui button"
        type="submit"
        onClick={onSubmitHandler}
        style={{ marginBottom: "40px" }}
      >
        Submit
      </button>
    </div>
  );
};

export default QuestionList;

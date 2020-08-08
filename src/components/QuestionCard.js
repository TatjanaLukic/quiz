import React from "react";

const styleQuestion = {
  color: "white"
};

const styleAnswers = {
  color: "white",
  margin: "5px"
};

const QuestionCard = props => {
  const onSelectHandler = event => {
    props.userAnswersUpdate(event.target.name, event.target.value);
  };

  return (
    <div className="grouped fields" style={{ marginTop: "5px" }}>
      <h3 style={styleQuestion}>{props.question.q}</h3>
      <div className="field">
        <div className="ui radio checkbox">
          <input
            type="radio"
            name={props.question.id}
            value="A"
            onChange={onSelectHandler}
          />
          <label style={styleAnswers}>{props.question.A}</label>
        </div>
      </div>
      <div className="field">
        <div className="ui radio checkbox">
          <input
            type="radio"
            name={props.question.id}
            value="B"
            onChange={onSelectHandler}
          />
          <label style={styleAnswers}>{props.question.B}</label>
        </div>
      </div>
      <div className="ui divider"></div>
    </div>
  );
};

export default QuestionCard;

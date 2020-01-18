import React from "react";

const Result = props => {
  const result = (props.score / 90) * 100;
  return (
    <div
      style={{
        fontSize: "50px",
        color: "white",
        padding: "40px 0",
        textAlign: "center"
      }}
    >
      Your score: {result.toFixed(2)} %
    </div>
  );
};

export default Result;

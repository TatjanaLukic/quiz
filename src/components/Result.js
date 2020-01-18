import React from "react";

const Result = props => {
  const result = (props.score / 90) * 100;
  return (
    <div
      style={{
        fontSize: "35px",
        color: "white",
        padding:"30px 0",
        textAlign: "center"
      }}
    >
      Score: {result.toFixed(2)} %
    </div>
  );
};

export default Result;

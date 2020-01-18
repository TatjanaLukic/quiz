import React from "react";

export const Title = props => {
  return (
    <h1
      style={{
        color: "#8f34eb",
        background: "white",
        marginTop: "30px",
        textAlign: "center",
        fontSize: "72px",
        marginBottom: "40px",
        padding: "30px 0px"
      }}
    >
      {props.title}
    </h1>
  );
};

export default Title;

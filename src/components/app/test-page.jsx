import React from "react";

const TestPage = (props) => {
  console.log(props);

  return (
    <React.Fragment>
      <h1>
      Test page for props
      </h1>
      <button onClick={() => props.props.history.push(`/login`)}>
      Push
      </button>
    </React.Fragment>

  );

};

export default TestPage;

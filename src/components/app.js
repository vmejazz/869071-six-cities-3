import React from "react";
import Main from "./main";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offerPlacesCount} = props;

  return (
    <Main offerPlacesCount={offerPlacesCount}/>
  );
};

export default App;

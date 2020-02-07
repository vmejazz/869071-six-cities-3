import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offerPlacesCount, apartmentTitleArray} = props;

  return (
    <Main
      offerPlacesCount={offerPlacesCount}
      apartmentTitleArray={apartmentTitleArray}/>
  );
};

App.propTypes = {
  offerPlacesCount: PropTypes.number.isRequired,
  apartmentTitleArray: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

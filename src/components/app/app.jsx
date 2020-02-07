import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offerPlacesCount, apartmentTitleArray, cityTitleHandler} = props;

  return (
    <Main
      offerPlacesCount={offerPlacesCount}
      apartmentTitleArray={apartmentTitleArray}
      cityTitleHandler={cityTitleHandler}/>
  );
};

App.propTypes = {
  offerPlacesCount: PropTypes.number.isRequired,
  apartmentTitleArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityTitleHandler: PropTypes.func
};

export default App;

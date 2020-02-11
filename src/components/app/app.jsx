import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offerPlacesCount, apartmentTitleArray, onCityTitleClick} = props;

  return (
    <Main
      offerPlacesCount={offerPlacesCount}
      apartmentTitleArray={apartmentTitleArray}
      onCityTitleClick={onCityTitleClick}/>
  );
};

App.propTypes = {
  offerPlacesCount: PropTypes.number.isRequired,
  apartmentTitleArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityTitleClick: PropTypes.func
};

export default App;

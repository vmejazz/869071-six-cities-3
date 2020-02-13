import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offerPlacesCount, offersArray, onCityTitleClick} = props;

  return (
    <Main
      offerPlacesCount={offerPlacesCount}
      offersArray={offersArray}
      onCityTitleClick={onCityTitleClick}/>
  );
};

App.propTypes = {
  offerPlacesCount: PropTypes.number.isRequired,
  offersArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcImg: PropTypes.string
  })).isRequired,
  onCityTitleClick: PropTypes.func
};

export default App;

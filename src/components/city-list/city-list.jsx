import React from "react";
import PropTypes from "prop-types";
import CityItem from "../city-item/city-item.jsx";

const MAX_CITYES = 6;

const CityList = (props) => {
  const {cityes, changeCity, activeCity} = props;
  const cityesArray = Object.keys(cityes).slice(0, MAX_CITYES);

  return (
    <ul className="locations__list tabs__list">
      { cityesArray.map((item, index) => {
        return (
          <CityItem
            city={item}
            activeCity={activeCity}
            onCityClick={changeCity}
            key={item + index}
          />
        );
      })}
    </ul>
  );
};

CityList.propTypes = {
  cityes: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
  onCityClick: PropTypes.func,
  changeCity: PropTypes.func,
  activeCity: PropTypes.string.isRequired
};

export default CityList;

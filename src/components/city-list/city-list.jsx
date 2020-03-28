import React from "react";
import PropTypes from "prop-types";
import CityItem from "../city-item/city-item.jsx";
import {connect} from "react-redux";
import {getCityes} from "../selectors.js";

const MAX_CITYES = 6;

const CityList = (props) => {
  // console.log(props);

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
  cityes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  ]),
  onCityClick: PropTypes.func,
  changeCity: PropTypes.func,
  activeCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  // cityes: getCityes(state)
});

export {CityList};
export default connect(mapStateToProps)(CityList);

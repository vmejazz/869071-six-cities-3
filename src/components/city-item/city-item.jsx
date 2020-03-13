import React from "react";
import PropTypes from "prop-types";

const CityItem = (props) => {
  const {city, activeCity, onCityClick} = props;
  const activeClass = city === activeCity;

  return (
    <li className="locations__item" onClick={() => onCityClick(city)}>
      <a
        className={`locations__item-link tabs__item ${activeClass ? `tabs__item--active` : ``}`}
        href="#"
      >
        <span>
          {city}
        </span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string,
  onCityClick: PropTypes.func
};

export default CityItem;

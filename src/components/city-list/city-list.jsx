import React from "react";
import PropTypes from "prop-types";

const MAX_CITYES = 6;

const CityList = (props) => {
  const {cityes, changeCity, activeCity} = props;
  const cityesArray = Object.keys(cityes).slice(0, MAX_CITYES);

  return (
    <ul className="locations__list tabs__list">
      { cityesArray.map((item, index) => {
        const activeClass = item === activeCity;
        return (
          <li className="locations__item" key={item + index} onClick={() => changeCity(item)}>
            <a
              className={`locations__item-link tabs__item ${activeClass ? `tabs__item--active` : ``}`}
              href="#"
            >
              <span>
                {item}
              </span>
            </a>
          </li>
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

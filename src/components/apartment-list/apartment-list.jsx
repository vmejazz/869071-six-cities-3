import React from "react";
import PropTypes from "prop-types";
import ApartmentCard from "../apartment-card/apartment-card.jsx";

const ApartmentList = (props) => {
  const {offersArray, onCityTitleClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersArray.map((item) => {
        return (
          <ApartmentCard
            key={item.id}
            placeOffer={item}
            onCityTitleClick={onCityTitleClick}
          />
        );
      })}
    </div>
  );
};

ApartmentList.propTypes = {
  offersArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCityTitleClick: PropTypes.func
};

export default ApartmentList;



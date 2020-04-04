import React from "react";
import PropTypes from "prop-types";
import ApartmentCard from "../apartment-card/apartment-card.jsx";

const ApartmentList = (props) => {
  const {offersShow = [], isFavoriteList = false} = props;
  const listClassName = isFavoriteList ? `favorites__places` : `cities__places-list places__list tabs__content`;

  return (
    <div className={listClassName}>
      {offersShow.map((item) => {
        return (
          <ApartmentCard
            key={item.id}
            placeOffer={item}
            isFavoriteList={isFavoriteList}
          />
        );
      })}
    </div>
  );
};

ApartmentList.propTypes = {
  offersShow: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    srcImg: PropTypes.string,
    imageURLs: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    premium: PropTypes.bool,
    type: PropTypes.string,
    rate: PropTypes.number,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    apartmentDetails: PropTypes.arrayOf(PropTypes.string),
    ownerInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool,
      srcAvatar: PropTypes.string
    }),
    positions: PropTypes.arrayOf(PropTypes.number)
  })),
  isFavoriteList: PropTypes.bool
};

export default ApartmentList;

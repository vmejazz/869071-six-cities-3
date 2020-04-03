import React from "react";
import PropTypes from "prop-types";
import ApartmentCard from "../apartment-card/apartment-card.jsx";
import {ActionCreator} from "../../reducer/data/data.js";
import {connect} from "react-redux";

const ApartmentList = (props) => {
  const {offersShow = [], onApartmentCardClick, onCardHover, isFavoriteList = false} = props;
  const listClassName = isFavoriteList ? `favorites__places` : `cities__places-list places__list tabs__content`;

  return (
    <div className={listClassName}>
      {offersShow.map((item) => {
        return (
          <ApartmentCard
            key={item.id}
            placeOffer={item}
            onApartmentCardClick={onApartmentCardClick}
            onCardHover={onCardHover}
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
    srcGallery: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    premium: PropTypes.bool,
    type: PropTypes.string,
    rate: PropTypes.number,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    apartmentStuff: PropTypes.arrayOf(PropTypes.string),
    ownerInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool,
      srcAvatar: PropTypes.string
    }),
    position: PropTypes.arrayOf(PropTypes.number)
  })),
  onApartmentCardClick: PropTypes.func,
  onCardHover: PropTypes.func,
  isFavoriteList: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => ({
  onCardHover(id) {
    dispatch(
        ActionCreator.onCardHover(id)
    );
  },
});

export {ApartmentList};
export default connect(null, mapDispatchToProps)(ApartmentList);

import React from "react";
import ApartmentList from "../apartment-list/apartment-list.jsx";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const FavoritesList = (props) => {
  const {offersFavorite, cityesFavorite} = props;

  return (
    <ul className="favorites__list">
      {cityesFavorite.map((item, index) => {
        const offersShow = offersFavorite.filter((offerItem) => {
          return (
            offerItem.city === item
          );
        });
        return (
          <li className="favorites__locations-items" key={item + index}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>{item}</span>
                </Link>
              </div>
            </div>
            <ApartmentList
              offersShow={offersShow}
              onCardHover={()=>{}}
              isFavoriteList={true}
            />
          </li>
        );
      })}
    </ul>
  );
};

FavoritesList.propTypes = {
  offersFavorite: PropTypes.arrayOf(PropTypes.shape({
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
    positions: PropTypes.arrayOf(PropTypes.number).isRequired
  })),
  cityesFavorite: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  ])
};

export default FavoritesList;

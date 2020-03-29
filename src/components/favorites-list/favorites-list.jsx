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
  offersFavorite: PropTypes.array,
  cityesFavorite: PropTypes.array
};

export default FavoritesList;

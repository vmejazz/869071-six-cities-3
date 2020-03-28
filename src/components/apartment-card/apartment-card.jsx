import React from "react";
import PropTypes from "prop-types";
import BookmarkButton from "../bookmark-button/bookmark-button.jsx";
import {Link} from "react-router-dom";

const ApartmentCard = (props) => {
  const {placeOffer, onCardHover} = props;
  const {id, title, price, srcImg, premium, type, rate, favorite} = placeOffer;

  // const bookmarkPush = () => {

  // };

  const DEACTIVATE_ID = -1;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onCardHover(id)}
      onMouseLeave={() => onCardHover(DEACTIVATE_ID)}
    >
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={srcImg} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={id}
            favorite={favorite}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rate <= 4 ? rate * 20 : 100}%`}}></span>
            <span className="visually-hidden">{rate}Rating</span>
          </div>
        </div>
        <h2
          className="place-card__name"
        >
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

ApartmentCard.propTypes = {
  placeOffer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    srcImg: PropTypes.string,
    premium: PropTypes.bool,
    type: PropTypes.string,
    rate: PropTypes.number,
    favorite: PropTypes.bool
  }).isRequired,
  onApartmentCardClick: PropTypes.func,
  onCardHover: PropTypes.func,
};

export default ApartmentCard;

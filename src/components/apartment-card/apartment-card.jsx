import React from "react";
import PropTypes from "prop-types";
import BookmarkButton from "../bookmark-button/bookmark-button.jsx";
import {Link} from "react-router-dom";

const ApartmentCard = (props) => {
  const {placeOffer, onCardHover, isFavoriteList} = props;
  const {id, title, price, srcImg, premium, type, rate, favorite} = placeOffer;

  const СlassNameType = {
    FAVORITE: `FAVORITE`,
    USUAL: `USUAL`
  };

  const classNameMap = {
    [СlassNameType.FAVORITE]: {
      article: `favorites__card place-card`,
      imageWrapper: `favorites__image-wrapper place-card__image-wrapper`,
      cardInfo: `favorites__card-info place-card__info`
    },
    [СlassNameType.USUAL]: {
      article: `cities__place-card place-card`,
      imageWrapper: `cities__image-wrapper place-card__image-wrapper`,
      cardInfo: `place-card__info`
    }
  };

  const DEACTIVATE_ID = -1;
  return (
    <article className={isFavoriteList ? classNameMap.FAVORITE.article : classNameMap.USUAL.article}
      onMouseEnter={() => onCardHover(id)}
      onMouseLeave={() => onCardHover(DEACTIVATE_ID)}
    >
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className={isFavoriteList ? classNameMap.FAVORITE.imageWrapper : classNameMap.USUAL.imageWrapper}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={srcImg} width={isFavoriteList ? `150` : `260`} height={isFavoriteList ? `110` : `200`} alt="Place image"/>
        </Link>
      </div>
      <div className={isFavoriteList ? classNameMap.FAVORITE.cardInfo : classNameMap.USUAL.cardInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={id}
            favorite={favorite}
            buttonClass={`place-card__bookmark`}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * Math.round(rate)}%`}}></span>
            Math.round
            <span className="visually-hidden">{rate}Rating</span>
          </div>
        </div>
        <h2
          className="place-card__name"
        >
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
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
  onCardHover: PropTypes.func,
  isFavoriteList: PropTypes.bool
};

export default ApartmentCard;

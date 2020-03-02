import React from "react";
import PropTypes from "prop-types";

const ApartmentCardClassMap = {
  MAIN_VIEW: `cities__place-card place-card`,
  DETAIL_VIEW: `near-places__card places__card`
};

const ApartmentCard = (props) => {
  const {placeOffer, onApartmentCardClick, onCardHover, detailView} = props;
  const {id, title, price, srcImg, premium, type, rate} = placeOffer;

  const DEACTIVATE_ID = -1;
  const apartmentCardClass = detailView ? ApartmentCardClassMap.DETAIL_VIEW : ApartmentCardClassMap.MAIN_VIEW;

  return (
    <article className={apartmentCardClass}
      onClick={() => onApartmentCardClick(id)}
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
        <a href="#">
          <img className="place-card__image" src={srcImg} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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
    rate: PropTypes.number
  }).isRequired,
  onApartmentCardClick: PropTypes.func,
  onCardHover: PropTypes.func,
  detailView: PropTypes.bool
};

export default ApartmentCard;

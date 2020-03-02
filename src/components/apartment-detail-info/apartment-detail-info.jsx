import React from "react";
import PropTypes from "prop-types";
import Reviews from "../reviews/reviews.jsx";
import Map from "../map/map.jsx";
import ApartmentList from "../apartment-list/apartment-list.jsx";

const MAX_IMAGES = 6;

const ApartmentDetailInfo = (props) => {
  const {offer, offersNearby, cityes, hoverCardId} = props;
  const {
    id,
    title,
    price,
    srcGallery = [],
    description,
    premium,
    type,
    rate,
    bedrooms,
    maxGuests,
    apartmentStuff,
    ownerInfo,
    reviews
  } = offer;

  return (
    <div className="page" id={id}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {srcGallery
                .slice(0, MAX_IMAGES)
                .map((item, index) => {
                  return (
                    <div className="property__image-wrapper" key={item + index}>
                      <img className="property__image" src={item} alt="Photo studio" />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rate <= 4 ? rate * 20 : 100}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rate}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
              Max {maxGuests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What`s inside</h2>
                <ul className="property__inside-list">
                  {apartmentStuff.map((item, index) => {
                    return (
                      <li className="property__inside-item" key={item + index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${ownerInfo.super ? ` property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={ownerInfo.srcAvatar} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {ownerInfo.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews
                reviews={reviews}
              />
            </div>
          </div>
          <Map
            offersShow={offersNearby}
            cityes={cityes}
            hoverCardId={hoverCardId}
            mapDetail={true}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ApartmentList
              offersShow={offersNearby}
              onApartmentCardClick={() => {}}
              onCardHover={() => {}}
              detailView={true}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

ApartmentDetailInfo.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcGallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
    premium: PropTypes.bool,
    type: PropTypes.string,
    rate: PropTypes.number,
    bedrooms: PropTypes.number,
    maxGuests: PropTypes.number,
    apartmentStuff: PropTypes.arrayOf(PropTypes.string),
    ownerInfo: PropTypes. object,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      srcAvatar: PropTypes.string,
      name: PropTypes.string,
      rate: PropTypes.number,
      text: PropTypes.string,
      date: PropTypes.string
    }))
  }).isRequired,
  hoverCardId: PropTypes.number,
  cityes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.number)),
  offersNearby: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcGallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
    premium: PropTypes.bool,
    type: PropTypes.string,
    rate: PropTypes.number,
    bedrooms: PropTypes.number,
    maxGuests: PropTypes.number,
    apartmentStuff: PropTypes.arrayOf(PropTypes.string),
    ownerInfo: PropTypes. object,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      srcAvatar: PropTypes.string,
      name: PropTypes.string,
      rate: PropTypes.number,
      text: PropTypes.string,
      date: PropTypes.string
    }))
  }))
};

export default ApartmentDetailInfo;

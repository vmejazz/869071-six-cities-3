import React from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {connect} from "react-redux";
import Map from "../map/map.jsx";
import {getOffersNearby, getOpenOffer} from "../../reducer/data/selectors.js";
import ReviewsForm from "../reviews-form/reviews-form.jsx";
import {getAutorisationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import BookmarkButton from "../bookmark-button/bookmark-button.jsx";
import PageNotFound from "../page-not-found/page-not-forund.jsx";
import PageHeader from "../page-header/page-header.jsx";
import withReviewForm from "../../hocs/with-review-form/with-review-form.jsx";
import OffersNearby from "../offers-nearby/offers-nearby.jsx";

const ReviewsFormWrapped = withReviewForm(ReviewsForm);

const MAX_IMAGES = 6;
const COEFFICIENT_ROUNDING_STAR = 20;
const ApartmentDetailInfo = (props) => {

  const {offersNearby = [], authorizationStatus, offer, activeOfferId} = props;

  if (offer === undefined) {
    return <PageNotFound />;
  } else {
    const {id, title, price, imageURLs = [], description, premium, type, rate, bedrooms, maxGuests, apartmentDetails, ownerInfo, favorite, city} = offer;
    let offersNearbyForMap = offersNearby.slice();
    offersNearbyForMap.push(offer);

    return (
      <React.Fragment>
        <div className="page" id={id}>
          <PageHeader />
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {imageURLs
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
                    <BookmarkButton
                      buttonClass={`property__bookmark`}
                      detailPage={true}
                      offerId={id}
                      favorite={favorite}
                    />
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: `${COEFFICIENT_ROUNDING_STAR * Math.round(rate)}%`}}></span>
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
                      {apartmentDetails.map((item, index) => {
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
                        <img className="property__avatar user__avatar" src={`../${ownerInfo.srcAvatar}`} width={74} height={74} alt="Host avatar" />
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
                  <section className="property__reviews reviews">
                    <ReviewsList
                      offerId={id}
                    />
                    {authorizationStatus === AuthorizationStatus.AUTH
                      ? <ReviewsFormWrapped offerId={id} />
                      : null
                    }
                  </section>
                </div>
              </div>
              <Map
                offersShow={offersNearbyForMap}
                isDetail={true}
                activeCity={city}
                isDetailHoverId={id}
              />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OffersNearby
                    activeOfferId={activeOfferId}
                    history={history}
                  />
                </div>
              </section>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
};

ApartmentDetailInfo.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    imageURLs: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    premium: PropTypes.bool,
    type: PropTypes.string,
    rate: PropTypes.number,
    bedrooms: PropTypes.number,
    maxGuests: PropTypes.number,
    apartmentDetails: PropTypes.arrayOf(PropTypes.string),
    ownerInfo: PropTypes. object,
    favorite: PropTypes.bool,
    city: PropTypes.string
  }),
  activeOfferId: PropTypes.string.isRequired,
  offersNearby: PropTypes.arrayOf(PropTypes.shape({
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state, activeOfferId) => ({
  offersNearby: getOffersNearby(state),
  authorizationStatus: getAutorisationStatus(state),
  offer: getOpenOffer(state, activeOfferId),
});

export {ApartmentDetailInfo};
export default connect(mapStateToProps, null)(ApartmentDetailInfo);


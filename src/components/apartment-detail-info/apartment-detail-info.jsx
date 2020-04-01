import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import UserProfile from "../user-profile/user-profile.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {Operation, ActionCreator} from "../../reducer/data/data.jsx";
import {connect} from "react-redux";
import Map from "../map/map.jsx";
import {getOffersNearby} from "../selectors.js";
import ApartmentList from "../apartment-list/apartment-list.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";
import {getAutorisationStatus} from "../selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.jsx";
import BookmarkButton from "../bookmark-button/bookmark-button.jsx";

const MAX_IMAGES = 6;

class ApartmentDetailInfo extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadNearby, activeOfferId} = this.props;

    loadNearby(activeOfferId);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const {offers, activeOfferId, offersNearby, authorizationStatus} = this.props;

    const offer = offers.find((item) => item.id === Number(activeOfferId));
    const {id, title, price, srcGallery = [], description, premium, type, rate, bedrooms, maxGuests, apartmentStuff, ownerInfo, favorite} = offer;

    return (
      <React.Fragment>
        <div className="page" id={id}>
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Link className="header__logo-link" to="/">
                    <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width={81} height={41} />
                  </Link>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <UserProfile />
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
                    <BookmarkButton
                      buttonClass={`property__bookmark`}
                      detailPage={true}
                      offerId={id}
                      favorite={favorite}
                    />
                    {/* <button className="property__bookmark-button button" type="button">
                      <svg className="property__bookmark-icon" width={31} height={33}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button> */}
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
                      // reviews={reviews}
                    />
                    {authorizationStatus === AuthorizationStatus.AUTH
                      ? <ReviewsForm offerId={id} />
                      : null
                    }
                  </section>
                </div>
              </div>
              <Map
                offersShow={offersNearby}
                isDetail={true}
              />
              {/* <section className="property__map map" /> */}
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <ApartmentList
                    offersShow={offersNearby}
                  />
                </div>
              </section>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}


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
    ownerInfo: PropTypes. object
  }),
  loadNearby: PropTypes.func,
  activeOfferId: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
  offersNearby: PropTypes.arrayOf(PropTypes.object),
  authorizationStatus: PropTypes.string.isRequired
};

// export default ApartmentDetailInfo;


const mapStateToProps = (state) => ({
  reviews: state.OFFER.reviews,
  offersNearby: getOffersNearby(state),
  authorizationStatus: getAutorisationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(offerId) {
    dispatch(
        Operation.getReviews(offerId)
    );
  },
  loadNearby(offerId) {
    dispatch(
        Operation.loadNearby(offerId)
    );
  },
  onCardHover(id) {
    dispatch(
        ActionCreator.onCardHover(id)
    );
  },
});

export {ApartmentDetailInfo};
export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDetailInfo);


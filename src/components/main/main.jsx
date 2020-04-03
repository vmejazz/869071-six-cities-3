import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data.js";
import ApartmentList from "../apartment-list/apartment-list.jsx";
import Map from "../map/map.jsx";
import CityList from "../city-list/city-list.jsx";
import EmptyOffers from "../empty-offers/empty-offers.jsx";
import SortOptions from "../sort-options/sort-options.jsx";
import withActiveItem from "../../hocs/withActiveItem.jsx";
import {getCityes, getOffersShow} from "../../reducer/data/selectors.js";
import PageHeader from "../page-header/page-header.jsx";

const SortOptionsWrapped = withActiveItem(SortOptions);

const Main = (props) => {
  const {
    offersShow,
    cityes,
    activeCity = Object.keys(cityes)[0],
    changeCity,
    hoverCardId,
    onCardHover,
    sortOffersDirect,
    sortOffersReverse,
  } = props;

  const offerPlacesCount = offersShow.length;
  const emptyOffers = offerPlacesCount === 0;

  const SortNames = {
    POPULAR: `Popular`,
    PRICE_LOW_TO_HIGH: `Price: low to high`,
    PRICE_HIGH_TO_LOW: `Price: high to low`,
    TOP_RATED_FIRST: `Top rated first`
  };

  const sortTypes = {
    [SortNames.POPULAR]: {
      type: `id`,
      directionForward: true
    },
    [SortNames.PRICE_LOW_TO_HIGH]: {
      type: `price`,
      directionForward: true
    },
    [SortNames.PRICE_HIGH_TO_LOW]: {
      type: `price`,
      directionForward: false
    },
    [SortNames.TOP_RATED_FIRST]: {
      type: `rate`,
      directionForward: false
    }
  };

  const onSortOptionsClick = (param) => {
    const {type, directionForward} = sortTypes[param];
    if (directionForward) {
      sortOffersDirect(type);
    } else {
      sortOffersReverse(type);
    }
  };

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <PageHeader />
        <main className={`page__main page__main--index + ${emptyOffers ? `page__main--index-empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList
                cityes={cityes}
                activeCity={activeCity}
                changeCity={changeCity}
              />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              {emptyOffers ?
                <EmptyOffers />
                :
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offerPlacesCount} places to stay in {activeCity}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <SortOptionsWrapped
                      onSortOptionsClick={onSortOptionsClick}
                    />
                  </form>
                  <ApartmentList
                    offersShow={offersShow}
                    onCardHover={onCardHover}
                  />
                </section>
              }
              <div className="cities__right-section">
                {emptyOffers ?
                  ``
                  :
                  <Map
                    offersShow={offersShow}
                    cityes={cityes}
                    hoverCardId={hoverCardId}
                    activeCity={activeCity}
                  />
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

Main.defaultProps = {
  offerPlacesCount: 3,
  offersShow: [],
  cityes: `Paris`,
  onCityTitleClick: () => {},
};

Main.propTypes = {
  offerPlacesCount: PropTypes.number.isRequired,
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
    position: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  onApartmentCardClick: PropTypes.func,
  cityes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  ]),
  activeCity: PropTypes.string,
  changeCity: PropTypes.func,
  hoverCardId: PropTypes.number,
  onCardHover: PropTypes.func,
  sortOffersDirect: PropTypes.func,
  sortOffersReverse: PropTypes.func,
  userInfo: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = (state) => ({
  activeCity: state.DATA.activeCity,
  hoverCardId: state.DATA.hoverCardId,
  cityes: getCityes(state),
  offersShow: getOffersShow(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(
        ActionCreator.changeCity(city)
    );
  },
  onCardHover(id) {
    dispatch(
        ActionCreator.onCardHover(id)
    );
  },
  sortOffersDirect(param) {
    dispatch(
        ActionCreator.sortOffersDirect(param)
    );
  },
  sortOffersReverse(param) {
    dispatch(
        ActionCreator.sortOffersReverse(param)
    );
  },
  getOffers(city) {
    dispatch(
        ActionCreator.getOffers(city)
    );
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);


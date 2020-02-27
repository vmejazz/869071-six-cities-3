import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.jsx";
import ApartmentList from "../apartment-list/apartment-list.jsx";
import Map from "../map/map.jsx";
import CityList from "../city-list/city-list.jsx";
import EmptyOffers from "../empty-offers/empty-offers.jsx";

const Main = (props) => {
  const {offerPlacesCount, offersShow, onApartmentCardClick, cityes, activeCity, changeCity} = props;
  const emptyOffers = offerPlacesCount === 0;

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

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
                    <span className="places__sorting-type" tabIndex="0">
                    Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom">
                      <li className="places__option places__option--active" tabIndex="0">Popular</li>
                      <li className="places__option" tabIndex="0">Price: low to high</li>
                      <li className="places__option" tabIndex="0">Price: high to low</li>
                      <li className="places__option" tabIndex="0">Top rated first</li>
                    </ul>
                    {/* <!--
                  <select class="places__sorting-type" id="places-sorting">
                    <option class="places__option" value="popular" selected="">Popular</option>
                    <option class="places__option" value="to-high">Price: low to high</option>
                    <option class="places__option" value="to-low">Price: high to low</option>
                    <option class="places__option" value="top-rated">Top rated first</option>
                  </select>
                  --> */}
                  </form>
                  <ApartmentList
                    offersShow={offersShow}
                    onApartmentCardClick={onApartmentCardClick}/>
                </section>
              }
              <div className="cities__right-section">
                {emptyOffers ?
                  ``
                  :
                  <Map
                    offersShow={offersShow}
                    cityes={cityes}
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
  onCityTitleClick: () => {}
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
  cityes: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(
        ActionCreator.changeCity(city)
    );
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);


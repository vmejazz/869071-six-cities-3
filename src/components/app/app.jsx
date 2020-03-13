import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data.jsx";
import Main from "../main/main.jsx";
import ApartmentDetailInfo from "../apartment-detail-info/apartment-detail-info.jsx";
import {getOffers} from "../selectors.js";

const App = (props) => {
  const {offers, offersShow, cityes, openOffer, activeOfferId} = props;

  const _renderApp = () => {

    if (offers.length < 1) {
      return (
        <h2>
          Предложения загружаются...
        </h2>
      );
    }
    if (activeOfferId < 1 && offers.length >= 1) {
      return (
        <Main
          offerPlacesCount={offersShow.length}
          offersShow={offersShow}
          onApartmentCardClick={openOffer}
          cityes={cityes}
        />
      );
    } else {
      return (
        <ApartmentDetailInfo offer={offersShow.find((item) => item.id === activeOfferId)} />
      );
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderApp()}
        </Route>
        <Route path="/offer">
          {/* <ApartmentDetailInfo offer={offer} /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcImg: PropTypes.string
  })).isRequired,
  offersShow: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcImg: PropTypes.string
  })),
  onApartmentCardClick: PropTypes.func,
  cityes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  ]),
  activeOfferId: PropTypes.number.isRequired,
  openOffer: PropTypes.func,
  getOffers: PropTypes.func
};

const mapStateToProps = (state) => ({
  // pop: getOffersShow,
  // offers: state.DATA.offers,
  offers: getOffers(state),
  // activeCity: state.activeCity,
  activeOfferId: state.DATA.activeOfferId,
  // offers: state.offers,
  offersShow: state.DATA.offersShow,
  // offersShow: getOffersShow(state),
  cityes: state.DATA.cityes,
});

const mapDispatchToProps = (dispatch) => ({
  openOffer(id) {
    dispatch(
        ActionCreator.openOffer(id)
    );
  },
  getOffers() {
    dispatch(
        ActionCreator.getOffers()
    );
  },
  // parseCityes(offers) {
  //   dispatch(
  //       ActionCreator.parseCityes(offers)
  //   );
  // }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

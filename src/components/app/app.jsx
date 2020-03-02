import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.jsx";
import Main from "../main/main.jsx";
import ApartmentDetailInfo from "../apartment-detail-info/apartment-detail-info.jsx";
import offersNearby from "../../mocks/offers-nearby.js";

class App extends PureComponent {

  _renderApp() {
    const {offers, offersShow, cityes, openOffer, activeOfferId} = this.props;

    if (activeOfferId < 0) {
      return (
        <Main
          offerPlacesCount={offersShow.length}
          offersShow={offersShow}
          onApartmentCardClick={openOffer}
          cityes={cityes}
        />
      );
    }

    return (
      <ApartmentDetailInfo
        offer={offers[activeOfferId - 1]}
        offersNearby={offersNearby}
        cityes={cityes}
        mapState={`mapDetail`}
      />
    );

  }

  render() {
    const offer = this.props.offers[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route path="/offer">
            <ApartmentDetailInfo
              offer={offer}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
  cityes: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.number).isRequired
  ),
  activeOfferId: PropTypes.number.isRequired,
  openOffer: PropTypes.func,
  getOffers: PropTypes.func
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeOfferId: state.activeOfferId,
  offers: state.offers,
  offersShow: state.offersShow,
  cityes: state.cityes
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
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

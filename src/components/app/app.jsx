import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.jsx";
import Main from "../main/main.jsx";
import ApartmentDetailInfo from "../apartment-detail-info/apartment-detail-info.jsx";

class App extends PureComponent {

  _renderApp() {
    const {offersArray, cityes, changeCity, activeOfferId} = this.props;

    if (activeOfferId < 0) {
      return (
        <Main
          offerPlacesCount={offersArray.length}
          offersArray={offersArray}
          onApartmentCardClick={changeCity}
          cityes={cityes}
        />
      );
    }

    return (
      <ApartmentDetailInfo offer={offersArray[activeOfferId - 1]} />
    );

  }

  render() {
    const offer = this.props.offersArray[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route path="/offer">
            <ApartmentDetailInfo offer={offer} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcImg: PropTypes.string
  })).isRequired,
  onApartmentCardClick: PropTypes.func,
  cityes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeOfferId: state.activeOfferId
});

const mapDispatchToProps = (dispatch) => ({
  changeCity() {
    dispatch(
        ActionCreator.changeCity(`paris`)
    );
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

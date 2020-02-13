import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import ApartmentDetailInfo from "../apartment-detail-info/apartment-detail-info.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      link: `/`
    };
  }

  render() {
    const {offerPlacesCount, offersArray, onCityTitleClick} = this.props;
    const offer = offersArray[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              offerPlacesCount={offerPlacesCount}
              offersArray={offersArray}
              onCityTitleClick={onCityTitleClick}/>
          </Route>
          <Route exact path="/dev-apartment-detail-info">
            <ApartmentDetailInfo offer={offer}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offerPlacesCount: PropTypes.number.isRequired,
  offersArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcImg: PropTypes.string
  })).isRequired,
  onCityTitleClick: PropTypes.func
};

export default App;

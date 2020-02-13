import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import ApartmentDetailInfo from "../apartment-detail-info/apartment-detail-info.jsx";

const App = (props) => {
  const {offerPlacesCount, offersArray, onCityTitleClick} = props;
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
};

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

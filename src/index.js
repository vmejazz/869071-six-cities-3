import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offersArray from "./mocks/offers.js";

// const apartmentTitleArray = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `New Apartment`, `Look! it's the best`];
const OFFER_PLACES_COUNT = offersArray.length;
const handleCityTitle = () => {};

ReactDOM.render(
    <App
      offerPlacesCount={OFFER_PLACES_COUNT}
      offersArray={offersArray}
      onCityTitleClick={handleCityTitle}/>,
    document.getElementById(`root`)
);

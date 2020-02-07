import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const apartmentTitleArray = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `New Apartment`, `Look! it's the best`];
const OFFER_PLACES_COUNT = apartmentTitleArray.length;

ReactDOM.render(
    <App
      offerPlacesCount={OFFER_PLACES_COUNT}
      apartmentTitleArray={apartmentTitleArray}/>,
    document.getElementById(`root`)
);

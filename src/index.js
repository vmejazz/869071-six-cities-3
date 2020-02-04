import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const OFFER_PLACES_COUNT = 312;

ReactDOM.render(
    <App
      offerPlacesCount={OFFER_PLACES_COUNT}/>,
    document.getElementById(`root`)
);

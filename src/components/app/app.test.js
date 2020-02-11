import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const OFFER_PLACES = 254;

const offersArray = [
  {
    id: 1,
    title: `First title`
  }
];

describe(`Test render App component`, () => {

  it(`<App /> should render page`, () => {
    const tree = renderer
      .create(
          <App
            offerPlacesCount={OFFER_PLACES}
            offersArray={offersArray}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

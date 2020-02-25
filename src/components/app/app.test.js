import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
jest.mock(`../map/map.jsx`, () => `Map`);

const OFFER_PLACES = 254;

const offersArray = [
  {
    id: 1,
    price: 156,
    title: `First title`,
    srcGallery: [],
    bedrooms: 2,
    maxGuests: 5,
    position: []
  }
];

const cityes = {
  AMSTERDAM: [52.38333, 4.9]
};

describe(`Test render App component`, () => {

  it(`<App /> should render page`, () => {
    const tree = renderer
      .create(
          <App
            offerPlacesCount={OFFER_PLACES}
            offersArray={offersArray}
            cityes={cityes}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

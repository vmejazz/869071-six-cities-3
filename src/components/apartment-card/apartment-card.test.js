import React from "react";
import renderer from "react-test-renderer";
import ApartmentCard from "./apartment-card.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";
jest.mock(`../bookmark-button/bookmark-button.jsx`, () => `BookmarkButton`);

const placeOffer = {
  id: 1,
  title: `New Perfect Apartment`,
  price: 500,
  srcImg: `./img/apartment-03.jpg`
};

describe(`Test ApartmentCard component`, () => {

  it(`<ApartmentCard /> should render apartment card `, () => {
    const tree = renderer
      .create(
          <Router history={customHistory}>
            <ApartmentCard
              placeOffer={placeOffer}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

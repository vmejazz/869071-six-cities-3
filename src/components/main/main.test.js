import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";
jest.mock(`../map/map.jsx`, () => `Map`);
jest.mock(`../city-list/city-list.jsx`, () => `CityList`);
jest.mock(`../reviews-list/reviews-list.jsx`, () => `ReviewsList`);
jest.mock(`../user-profile/user-profile.jsx`, () => `UserProfile`);

const OFFER_PLACES = 254;

const offersArray = [
  {
    id: 1,
    title: ``,
    price: 120,
    srcImg: ``,
    imageURLs: [],
    description: ``,
    premium: true,
    type: ``,
    rate: 1,
    bedrooms: 1,
    maxGuests: 1,
    apartmentDetails: [],
    ownerInfo: {
      name: ``,
      super: true,
      srcAvatar: ``
    },
    positions: [1, 1],
    city: ``
  }
];

const userInfo = {
  AuthorizationStatus: `NO_AUTH`
};

const cityes = {
  AMSTERDAM: [52.38333, 4.9]
};

it(`<Main /> should render all page`, () => {
  const tree = renderer
      .create(
          <Router history={customHistory}>
            <Main
              activeCity={`Moscow`}
              offerPlacesCount={OFFER_PLACES}
              offersArray={offersArray}
              cityes={cityes}
              onApartmentCardClick={() => {}}
              userInfo={userInfo}
            />
          </Router>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

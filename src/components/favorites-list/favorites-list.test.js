import React from "react";
import renderer from "react-test-renderer";
import FavoritesList from "./favorites-list.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";
jest.mock(`../apartment-list/apartment-list.jsx`, () => `ApartmentList`);

const offersFavorite = [
  {
    id: 12,
    title: `House in countryside`,
    price: 405,
    srcImg: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
    srcGallery: [
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`
    ],
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    premium: true,
    type: `house`,
    rate: 3.8,
    bedrooms: 3,
    maxGuests: 8,
    apartmentStuff: [
      `Breakfast`,
      `Laptop friendly workspace`,
      `Washer`
    ],
    ownerInfo: {
      "name": `Angelina`,
      'super': true,
      "srcAvatar": `img/avatar-angelina.jpg`,
      "id": 25
    },
    position: [
      51.211402,
      6.756314000000001
    ],
    city: `Dusseldorf`,
    favorite: true
  },
  {
    id: 4,
    title: `Canal View Prinsengracht`,
    price: 185,
    srcImg: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
    srcGallery: [
    ],
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    premium: false,
    type: `hotel`,
    rate: 2.9,
    bedrooms: 3,
    maxGuests: 8,
    apartmentStuff: [
      `Laptop friendly workspace`,
      `Breakfast`
    ],
    ownerInfo: {
      "name": `Angelina`,
      'super': true,
      "srcAvatar": `img/avatar-angelina.jpg`,
      "id": 25
    },
    position: [
      51.216402,
      6.758314
    ],
    city: `Dusseldorf`,
    favorite: true
  },
];

const cityesFavorite = [
  `Dusseldorf`,
  `Amsterdam`,
  `Cologne`
];


it(`<FavoritesList /> should render favorites list `, () => {
  const tree = renderer
      .create(
          <Router history={customHistory}>
            <FavoritesList
              offersFavorite={offersFavorite}
              cityesFavorite={cityesFavorite}
            />
          </Router>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

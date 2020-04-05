import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";
jest.mock(`../bookmark-button/bookmark-button.jsx`, () => `BookmarkButton`);
jest.mock(`../user-profile/user-profile.jsx`, () => `UserProfile`);
jest.mock(`../reviews-list/reviews-list.jsx`, () => `ReviewsList`);
jest.mock(`../map/map.jsx`, () => `Map`);
jest.mock(`../apartment-list/apartment-list.jsx`, () => `ApartmentList`);
jest.mock(`../reviews-form/reviews-form.jsx`, () => `ReviewsForm`);

const offersFavorite = [{
  id: 1,
  title: `Beautiful apartment`,
  price: 120,
  srcImg: `img/apartment-01.jpg`,
  imageURLs: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
  description: `All super long text about apartmmnet with cools stuffs`,
  premium: true,
  type: `Room`,
  rate: 4.8,
  bedrooms: 3,
  maxGuests: 4,
  apartmentDetails: [`Wifi`, `Cable TV`, `Kitchen`],
  ownerInfo: {
    name: `Jon`,
    super: true,
    srcAvatar: `img/avatar-max.jpg`
  },
  positions: [234, 234234]
}];

const cityesFavorite = {
  Dusseldorf: {

  },
  Amsterdam: {

  },
  Cologne: {

  }
};
const loadFavorites = () => {};

it(`<Favorites /> should render favorites page `, () => {
  const tree = renderer
      .create(
          <Router history={customHistory} >
            <Favorites
              offersFavorite={offersFavorite}
              cityesFavorite={cityesFavorite}
              loadFavorites={loadFavorites}
            />
          </Router>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

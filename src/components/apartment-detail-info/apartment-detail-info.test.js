import React from "react";
import renderer from "react-test-renderer";
import {ApartmentDetailInfo} from "./apartment-detail-info.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";
jest.mock(`../bookmark-button/bookmark-button.jsx`, () => `BookmarkButton`);
jest.mock(`../user-profile/user-profile.jsx`, () => `UserProfile`);
jest.mock(`../reviews-list/reviews-list.jsx`, () => `ReviewsList`);
jest.mock(`../map/map.jsx`, () => `Map`);
jest.mock(`../apartment-list/apartment-list.jsx`, () => `ApartmentList`);
jest.mock(`../reviews-form/reviews-form.jsx`, () => `ReviewsForm`);

const offer = {
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
  }
};

const activeOfferId = `1`;
const offersNearby = [
  {},
  {}
];
const authorizationStatus = `NO_AUTH`;
const reviews = [{
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    url: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
}];
const getReviews = () => {};
const loadNearby = () => {};
const onCardHover = () => {};

it(`<ApartmentDetailInfo /> should render apartment-detail-info page `, () => {
  const tree = renderer
      .create(
          <Router history={customHistory} >
            <ApartmentDetailInfo
              offers={[offer]}
              activeOfferId={activeOfferId}
              offersNearby={offersNearby}
              authorizationStatus={authorizationStatus}
              reviews={reviews}
              getReviews={getReviews}
              loadNearby={loadNearby}
              onCardHover={onCardHover}
            />
          </Router>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

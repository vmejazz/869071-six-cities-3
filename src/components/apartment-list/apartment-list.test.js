import React from "react";
import renderer from "react-test-renderer";
import ApartmentList from "./apartment-list.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";
jest.mock(`../bookmark-button/bookmark-button.jsx`, () => `BookmarkButton`);
jest.mock(`../apartment-card/apartment-card.jsx`, () => `ApartmentCard`);

const offersShow = [
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

describe(`Test Apartment list`, () => {

  it(`<ApartmentList /> should render list`, () => {
    const tree = renderer
      .create(
          <Router history={customHistory} >
            <ApartmentList
              offersShow={offersShow}/>
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

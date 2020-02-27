import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
jest.mock(`../map/map.jsx`, () => `Map`);
jest.mock(`../apartment-detail-info/apartment-detail-info.jsx`, () => `ApartmentDetailInfo`);

const OFFER_PLACES = 254;

const offersArray = [
  {
    id: 2,
    title: `Perfect apartment`,
    price: 200,
    srcImg: `img/apartment-02.jpg`,
    srcGallery: [],
    description: ``,
    premium: false,
    type: `House`,
    rate: 1,
    bedrooms: 3,
    maxGuests: 4,
    apartmentStuff: [`wifi`, `Cable TV`, `Kitchen`],
    ownerInfo: {
      name: `Jon`,
      super: true,
      srcAvatar: `img/avatar-max.jpg`
    },
    position: [50.938014, 6.958104],
    city: `Cologne`
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
            activeOfferId={2}
            offerPlacesCount={OFFER_PLACES}
            offers={offersArray}
            offersShow={offersArray}
            cityes={cityes}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

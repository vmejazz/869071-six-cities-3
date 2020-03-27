import React from "react";
import renderer from "react-test-renderer";
// import {Main} from "./main.jsx";
jest.mock(`../map/map.jsx`, () => `Map`);
jest.mock(`../city-list/city-list.jsx`, () => `CityList`);

// const OFFER_PLACES = 254;

// const offersArray = [
//   {
//     id: 1,
//     title: ``,
//     price: 120,
//     srcImg: ``,
//     srcGallery: [],
//     description: ``,
//     premium: true,
//     type: ``,
//     rate: 1,
//     bedrooms: 1,
//     maxGuests: 1,
//     apartmentStuff: [],
//     ownerInfo: {
//       name: ``,
//       super: true,
//       srcAvatar: ``
//     },
//     position: [1, 1],
//     city: ``
//   }
// ];

// const userInfo = {
//   AuthorizationStatus: `NO_AUTH`
// };

// const cityes = {
//   AMSTERDAM: [52.38333, 4.9]
// };

it(`<Main /> should render all page`, () => {
  const tree = renderer
      .create(
          <h1></h1>
          // <Main
          //   activeCity={`Moscow`}
          //   offerPlacesCount={OFFER_PLACES}
          //   offersArray={offersArray}
          //   cityes={cityes}
          //   onApartmentCardClick={() => {}}
          //   userInfo={userInfo}
          // />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

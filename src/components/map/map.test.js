import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map.jsx";

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn(),
    remove: jest.fn()
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
}));

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
    city: `Moscow`
  }
];

const cityes = {
  AMSTERDAM: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  }
};

it(`Map render`, () => {
  const tree = renderer
    .create(
        <Map
          activeCity={`AMSTERDAM`}
          offersShow={offersShow}
          cityes={cityes}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

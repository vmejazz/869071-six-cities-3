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
    srcGallery: [],
    description: ``,
    premium: true,
    type: ``,
    rate: 1,
    bedrooms: 1,
    maxGuests: 1,
    apartmentStuff: [],
    ownerInfo: {
      name: ``,
      super: true,
      srcAvatar: ``
    },
    position: [1, 1],
    city: `Moscow`
  }
];

const cityes = {
  AMSTERDAM: [52.38333, 4.9]
};

it(`Map render`, () => {
  const tree = renderer
    .create(
        <Map
          activeCity={`Moscow`}
          offersShow={offersShow}
          cityes={cityes}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

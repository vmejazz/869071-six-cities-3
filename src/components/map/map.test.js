import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

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

const cityes = {
  AMSTERDAM: [52.38333, 4.9]
};

it(`Map render`, () => {
  const tree = renderer
    .create(
        <Map
          offers={[]}
          cityes={cityes}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

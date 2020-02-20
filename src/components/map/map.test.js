import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

it(`Map render`, () => {
  const tree = renderer
    .create(
        <Map
          offers={[]}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

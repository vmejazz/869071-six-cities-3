import React from "react";
import renderer from "react-test-renderer";
import EmptyOffers from "./empty-offers.jsx";

it(`<EmptyOffers /> should render `, () => {
  const tree = renderer
      .create(
          <EmptyOffers />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

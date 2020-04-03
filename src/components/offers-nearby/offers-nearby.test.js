import React from "react";
import renderer from "react-test-renderer";
import {OffersNearby} from "./offers-nearby.jsx";
jest.mock(`../apartment-list/apartment-list.jsx`, () => `ApartmentList`);

it(`<OffersNearby /> should render `, () => {
  const tree = renderer
      .create(
          <OffersNearby
            loadNearby={() => {}}
            activeOfferId={`5`}
            offersNearby={[]}
          />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

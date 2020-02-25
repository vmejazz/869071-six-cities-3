import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
jest.mock(`../map/map.jsx`, () => `Map`);

const OFFER_PLACES = 254;

const apartmentTitleArray = [
  `First title`,
  `Second title`,
  `Third title`,
  `Another title`
];

const cityes = {
  AMSTERDAM: [52.38333, 4.9]
};

it(`<Main /> should render all page`, () => {
  const tree = renderer
      .create(
          <Main
            offerPlacesCount={OFFER_PLACES}
            apartmentTitleArray={apartmentTitleArray}
            cityes={cityes}
          />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

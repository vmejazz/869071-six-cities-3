import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list";

const cityes = {
  Amsterdam: [52.38333, 4.9],
  Paris: [48, 53]
};

it(`<CityList /> should render cityes buttons`, () => {
  const tree = renderer
      .create(
          <CityList
            cityes={cityes}
            activeCity={`Paris`}
          />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

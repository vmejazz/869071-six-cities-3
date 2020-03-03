import React from "react";
import renderer from "react-test-renderer";
import CityItem from "./city-item";

it(`<CityList /> should render cityes buttons`, () => {
  const tree = renderer
      .create(
          <CityItem
            city={`Moscow`}
            activeCity={`Paris`}
            onCityClick={() => {}}
          />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

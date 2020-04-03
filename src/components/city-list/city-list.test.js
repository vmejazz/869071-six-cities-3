import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";

const cityes = {
  Amsterdam: [52.38333, 4.9],
  Paris: [48, 53]
};

it(`<CityList /> should render cityes buttons`, () => {
  const tree = renderer
      .create(
          <Router history={customHistory}>
            <CityList
              cityes={cityes}
              activeCity={`Paris`}
            />
          </Router>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

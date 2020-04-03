import React from "react";
import renderer from "react-test-renderer";
import {SingIng} from "./sing-in.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";

it(`SingIng section render`, () => {
  const tree = renderer
    .create(
        <Router history={customHistory}>
          <SingIng
            userInfo={{authorizationStatus: `AUTH`}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import PageNotFound from "./page-not-forund.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";

it(`<PageNotFound /> should render favorites empty page `, () => {
  const tree = renderer
      .create(
          <Router history={customHistory}>
            <PageNotFound
            />
          </Router>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

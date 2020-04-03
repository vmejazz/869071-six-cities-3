import React from "react";
import renderer from "react-test-renderer";
import PageHeader from "./page-header.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";
jest.mock(`../user-profile/user-profile.jsx`, () => `UserProfile`);

it(`<PageHeader /> should render `, () => {
  const tree = renderer
      .create(
          <Router history={customHistory}>
            <PageHeader
            />
          </Router>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

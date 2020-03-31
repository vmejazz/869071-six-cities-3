import React from "react";
import renderer from "react-test-renderer";
import {UserProfile} from "./user-profile.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";
// jest.mock(`../reviews-list/reviews-list.jsx`, () => `ReviewsList`);

it(`UserProfile section render`, () => {
  const tree = renderer
    .create(
        <Router history={customHistory}>
          <UserProfile
            userInfo={{authorizationStatus: `AUTH`}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

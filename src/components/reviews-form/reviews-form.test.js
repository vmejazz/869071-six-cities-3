import React from "react";
import renderer from "react-test-renderer";
import {ReviewsForm} from "./reviews-form.jsx";
// jest.mock(`../reviews-list/reviews-list.jsx`, () => `ReviewsList`);

it(`ReviewsForm section render`, () => {
  const tree = renderer
    .create(
        <ReviewsForm
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import {ReviewsForm} from "./reviews-form.jsx";

it(`ReviewsForm section render`, () => {
  const tree = renderer
    .create(
        <ReviewsForm
          buttonStatus={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

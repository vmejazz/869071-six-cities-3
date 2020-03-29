import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews.jsx";

const reviews = [
  {
    srcAvatar: ``,
    name: `Bob`,
    rate: 2,
    text: `Test mock text`,
    date: `2018-02-25`
  }
];

it(`Review section render`, () => {
  const tree = renderer
    .create(
        <Reviews
          reviews={reviews}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

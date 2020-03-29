import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

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
        <ReviewsList
          reviews={reviews}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

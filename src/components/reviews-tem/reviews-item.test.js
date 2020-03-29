import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";

const review = {
  srcAvatar: ``,
  name: `Bob`,
  rate: 2,
  text: `Test mock text`,
  date: `2018-02-25`
};

it(`Review section render`, () => {
  const tree = renderer
    .create(
        <ReviewsItem
          review={review}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

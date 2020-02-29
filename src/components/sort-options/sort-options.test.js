import React from "react";
import renderer from "react-test-renderer";
import SortOptions from "../sort-options/sort-options.jsx";

it(`SortOption render`, () => {
  const tree = renderer
    .create(
        <SortOptions
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import LoadingPage from "./loading-page.jsx";

it(`<LoadingPage /> should render LoadingPage page `, () => {
  const tree = renderer
      .create(
          <LoadingPage
          />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

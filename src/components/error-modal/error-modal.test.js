import React from "react";
import renderer from "react-test-renderer";
import ErrorModal from "./error-modal.jsx";

it(`<ErrorModal /> should render `, () => {
  const tree = renderer
      .create(
          <ErrorModal
            closeModal={() => {}}
          />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

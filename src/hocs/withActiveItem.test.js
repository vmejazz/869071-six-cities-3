import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveItem from "./withActiveItem";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.any
};

const MockComponentWrapped = withActiveItem(MockComponent);


it(`withActiveItem should render`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        someProps={`someProps`}
        someBool={false}
      />
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

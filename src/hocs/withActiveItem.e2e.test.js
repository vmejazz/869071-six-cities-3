import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./withActiveItem.jsx";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {children, setActiveItem} = props;

  return (
    <div
      onClick={() => setActiveItem(`div--active`)}
    >
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.any,
  setActiveItem: PropTypes.func,
};

it(`Should that HOC's setActiveItem`, () => {
  const MockComponentWrapped = withActiveItem(MockComponent);

  const tree = mount(
      <MockComponentWrapped
      />
  );

  const itemForSelected = tree.find(`MockComponent div`);
  itemForSelected.simulate(`click`);
  expect(tree.state([`activeItem`])).toBe(`div--active`);
});

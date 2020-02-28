import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortOptions from "../sort-options/sort-options.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should SortOptions be pressed a`, () => {
  const onSortOptionsClick = jest.fn();

  const tree = shallow(
      <SortOptions
        onSortOptionsClick={onSortOptionsClick}
      />
  );

  const sortOption = tree.find(`.places__option`).first();

  sortOption.props().onClick();
  expect(onSortOptionsClick.mock.calls.length).toBe(1);
});



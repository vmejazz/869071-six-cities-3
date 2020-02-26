import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CityList} from "./city-list";

Enzyme.configure({
  adapter: new Adapter()
});

const cityes = {
  Moscow: [54, 43]
};

it(`Should City-button be pressed and set ActiveCity`, () => {
  const changeCity = jest.fn();

  const tree = shallow(
      <CityList
        activeCity={`Paris`}
        cityes={cityes}
        changeCity={changeCity}
      />
  );

  const cityButton = tree.find(`.locations__item`);

  cityButton.props().onClick();

  expect(changeCity).toHaveBeenCalledWith(`Moscow`);
});



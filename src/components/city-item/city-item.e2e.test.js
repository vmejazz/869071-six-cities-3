import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CityItem from "./city-item";

Enzyme.configure({
  adapter: new Adapter()
});

const city = `Moscow`;

it(`Should City-button be pressed and set ActiveCity`, () => {
  const changeCity = jest.fn();

  const tree = shallow(
      <CityItem
        activeCity={`Paris`}
        city={city}
        onCityClick={changeCity}
      />
  );

  const cityButton = tree.find(`.locations__item`);

  cityButton.props().onClick();

  expect(changeCity).toHaveBeenCalledWith(`Moscow`);
});



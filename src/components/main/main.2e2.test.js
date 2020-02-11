import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const apartmentTitleArray = [
  `Title of apartment`
];

it(`Should button be pressed`, () => {
  const handleCityTitle = jest.fn();

  const mainScreen = mount(
      <Main
        apartmentTitleArray={apartmentTitleArray}
        onCityTitleClick={handleCityTitle}
      />
  );

  const titleLink = mainScreen.find(`.place-card__name`);

  titleLink.props().onClick();

  expect(handleCityTitle.mock.calls.length).toBe(1);
});

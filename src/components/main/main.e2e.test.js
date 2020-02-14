import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const offersArray = [
  {
    id: 1,
    title: `Title of apartment`
  }
];

it(`Should button be pressed`, () => {
  const onApartmentCardClick = jest.fn();

  const mainScreen = mount(
      <Main
        offersArray={offersArray}
        onApartmentCardClick={onApartmentCardClick}
      />
  );

  const titleLink = mainScreen.find(`.place-card`);

  titleLink.props().onClick();

  expect(onApartmentCardClick.mock.calls.length).toBe(1);
});

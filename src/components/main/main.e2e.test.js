import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
jest.mock(`../map/map.jsx`);

Enzyme.configure({
  adapter: new Adapter()
});

const offersArray = [
  {
    id: 3,
    price: 777,
    title: `Title of apartment`,
    srcGallery: [],
    bedrooms: 2,
    maxGuests: 5,
    position: []
  }
];

const cityes = {
  AMSTERDAM: [52.38333, 4.9]
};

it(`Should button be pressed`, () => {
  const onApartmentCardClick = jest.fn();

  const mainScreen = mount(
      <Main
        offersArray={offersArray}
        onApartmentCardClick={onApartmentCardClick}
        cityes={cityes}
      />
  );

  const titleLink = mainScreen.find(`.place-card`);

  titleLink.props().onClick();

  expect(onApartmentCardClick.mock.calls.length).toBe(1);
  expect(onApartmentCardClick).toHaveBeenCalledWith(3);
});

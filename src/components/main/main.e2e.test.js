import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";

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

const sortParam = `Price: low to high`;
const sortDirectionForward = true;

const userInfo = {
  authorizationStatus: `AUTH`
};

const cityes = {
  AMSTERDAM: [52.38333, 4.9]
};

const activeCity = `Moscow`;

it(`Should button be pressed`, () => {
  const changeCity = jest.fn();

  const mainScreen = shallow(
      <Main
        activeCity={activeCity}
        offersShow={offersArray}
        changeCity={changeCity}
        cityes={cityes}
        userInfo={userInfo}
      />
  );
  const cityNavigation = mainScreen.find(`CityList`);
  cityNavigation.props().changeCity(activeCity);

  expect(changeCity.mock.calls.length).toBe(1);
  expect(changeCity).toHaveBeenCalledWith(`Moscow`);
});


it(`Should sort button be pressed`, () => {
  const onSortOptionsClick = jest.fn();
  const sortOffersDirect = jest.fn();

  const mainScreen = shallow(
      <Main
        activeCity={activeCity}
        offersShow={offersArray}
        onSortOptionsClick={onSortOptionsClick}
        cityes={cityes}
        userInfo={userInfo}
        sortOffersDirect={sortOffersDirect}
      />
  );
  const SortOptionElement = mainScreen.find(`WithActiveItem`);
  SortOptionElement.props().onSortOptionsClick(sortParam, sortDirectionForward);

  expect(sortOffersDirect.mock.calls.length).toBe(1);
  expect(sortOffersDirect).toHaveBeenCalledWith(`price`);
});

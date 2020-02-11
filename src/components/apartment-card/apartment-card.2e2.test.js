import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentCard from "./apartment-card.jsx";
import ApartmentList from "../apartment-list/apartment-list.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const placeOffer = {
  id: 1,
  title: `Best Apartment`
};

const offersArray = [
  {
    id: 1,
    title: `First apartment`
  }
];

describe(``, () => {
  it(`Should button be pressed`, () => {
    const onMouseHover = jest.fn();

    const tree = shallow(
        <ApartmentCard
          placeOffer={placeOffer}
          onMouseHover={onMouseHover}
        />
    );

    const apartmentArticle = tree.find(`.place-card`);

    apartmentArticle.props().onMouseEnter();

    expect(onMouseHover.mock.calls.length).toBe(1);
  });

  it(`Should change ActideCardID`, () => {
    const onMouseHover = jest.fn();

    const tree = mount(
        <ApartmentList
          offersArray={offersArray}
          onMouseHover={onMouseHover}
        />
    );

    const apartmentArticle = tree.find(`.place-card`);

    expect(tree.state().activeCardId).toEqual(-1);
    apartmentArticle.props().onMouseEnter();
    expect(tree.state().activeCardId).toEqual(1);
  });
});


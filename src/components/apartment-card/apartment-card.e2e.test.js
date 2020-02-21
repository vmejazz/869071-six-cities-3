import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentCard from "./apartment-card.jsx";
import ApartmentList from "../apartment-list/apartment-list.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const placeOffer = {
  id: 5,
  title: `Best Apartment`
};

const offersArray = [
  {
    id: 3,
    title: `First apartment`
  }
];

describe(``, () => {
  it(`Should button be pressed and retern ID card`, () => {
    const onApartmentCardClick = jest.fn();

    const tree = shallow(
        <ApartmentCard
          placeOffer={placeOffer}
          onApartmentCardClick={onApartmentCardClick}
          onMouseHover={() => {}}
        />
    );

    const apartmentArticle = tree.find(`.place-card`);

    apartmentArticle.props().onClick();

    // expect(onApartmentCardClick.mock.calls.length).toBe(1);
    expect(onApartmentCardClick).toHaveBeenCalledWith(5);
  });

  it(`Should change ActideCardID when mouse hover on card`, () => {
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
    expect(tree.state().activeCardId).toEqual(3);
    apartmentArticle.props().onMouseLeave();
    expect(tree.state().activeCardId).toEqual(-1);
  });
});


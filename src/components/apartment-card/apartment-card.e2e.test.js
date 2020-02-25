import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentCard from "./apartment-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const placeOffer = {
  id: 5,
  title: `Best Apartment`
};

describe(``, () => {
  it(`Should button be pressed and retern ID card`, () => {
    const onApartmentCardClick = jest.fn();

    const tree = shallow(
        <ApartmentCard
          placeOffer={placeOffer}
          onApartmentCardClick={onApartmentCardClick}
        />
    );

    const apartmentArticle = tree.find(`.place-card`);

    apartmentArticle.props().onClick();

    expect(onApartmentCardClick).toHaveBeenCalledWith(5);
  });

  it(`Should change ActideCardID when mouse hover and leave on card`, () => {
    const onMouseHover = jest.fn();

    const tree = shallow(
        <ApartmentCard
          placeOffer={placeOffer}
          onMouseHover={onMouseHover}
        />
    );

    const apartmentArticle = tree.find(`.place-card`);

    apartmentArticle.props().onMouseEnter();
    expect(onMouseHover).toHaveBeenCalledWith(5);

    apartmentArticle.props().onMouseLeave();
    expect(onMouseHover).toHaveBeenCalledWith(-1);
  });
});


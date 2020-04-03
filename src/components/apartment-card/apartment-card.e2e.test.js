import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ApartmentCard} from "./apartment-card.jsx";
import customHistory from "../../history.js";
import {Router} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter()
});

const placeOffer = {
  id: 5,
  title: `Best Apartment`
};


it(`Should change ActideCardID when mouse hover and leave on card`, () => {
  const onCardHover = jest.fn();

  const tree = shallow(
      <Router history={customHistory}>
        <ApartmentCard
          placeOffer={placeOffer}
          onCardHover={onCardHover}
        />
      </Router>
  );
  const apartmentArticle = tree.find(`ApartmentCard`);

  apartmentArticle.props().onCardHover(placeOffer.id);
  expect(onCardHover).toHaveBeenCalledWith(5);
});



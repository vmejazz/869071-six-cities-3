import React from "react";
import renderer from "react-test-renderer";
import ApartmentCard from "./apartment-card";

const placeOffer = {
  id: 1,
  title: `New Perfect Apartment`,
  price: 500,
  srcImg: `./img/apartment-03.jpg`
};

describe(`Test Apartment list`, () => {

  it(`<ApartmentList /> should render list`, () => {
    const tree = renderer
      .create(
          <ApartmentCard
            placeOffer={placeOffer}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

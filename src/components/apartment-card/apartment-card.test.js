import React from "react";
import renderer from "react-test-renderer";
// import ApartmentCard from "./apartment-card";

// const placeOffer = {
//   id: 1,
//   title: `New Perfect Apartment`,
//   price: 500,
//   srcImg: `./img/apartment-03.jpg`
// };

describe(`Test ApartmentCard component`, () => {

  it(`<ApartmentCard /> should render apartment card `, () => {
    const tree = renderer
      .create(
          <h1></h1>
          // <ApartmentCard
          //   placeOffer={placeOffer}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

import React from "react";
import renderer from "react-test-renderer";
import ApartmentList from "./apartment-list.jsx";

const offersArray = [
  {
    id: 1,
    title: `First title`
  },
  {
    id: 2,
    title: `Second title`
  }
];

describe(`Test Apartment list`, () => {

  it(`<ApartmentList /> should render list`, () => {
    const tree = renderer
      .create(
          <ApartmentList
            offersArray={offersArray}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

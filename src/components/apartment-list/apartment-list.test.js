import React from "react";
import renderer from "react-test-renderer";
import ApartmentList from "./apartment-list.jsx";

const apartmentTitleArray = [
  `First title`,
  `Second title`,
  `Third title`,
  `Another title`
];

describe(`Test Apartment list`, () => {

  it(`<ApartmentList /> should render list`, () => {
    const tree = renderer
      .create(
          <ApartmentList
            apartmentTitleArray={apartmentTitleArray}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

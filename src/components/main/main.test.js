import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const OFFER_PLACES = 254;

const apartmentTitleArray = [
  `First title`,
  `Second title`,
  `Third title`,
  `Another title`
];


describe(`Test Main page`, () => {

  it(`<Main /> should render all page`, () => {
    const tree = renderer
      .create(
          <Main
            offerPlacesCount={OFFER_PLACES}
            apartmentTitleArray={apartmentTitleArray}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Main /> should render page whith empty props`, () => {
    const tree = renderer
      .create(
          <Main />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

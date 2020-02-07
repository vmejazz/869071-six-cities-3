import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const OFFER_PLACES = 254;

const apartmentTitleArray = [
  `First title`,
  `Second title`,
  `Third title`,
  `Another title`
];

describe(`Test render App component`, () => {

  it(`<App /> should render page`, () => {
    const tree = renderer
      .create(
          <App
            offerPlacesCount={OFFER_PLACES}
            apartmentTitleArray={apartmentTitleArray}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

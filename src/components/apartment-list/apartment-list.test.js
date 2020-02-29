import React from "react";
import renderer from "react-test-renderer";
import ApartmentList from "./apartment-list.jsx";

const offersShow = [
  {
    id: 1,
    title: ``,
    price: 120,
    srcImg: ``,
    srcGallery: [],
    description: ``,
    premium: true,
    type: ``,
    rate: 1,
    bedrooms: 1,
    maxGuests: 1,
    apartmentStuff: [],
    ownerInfo: {
      name: ``,
      super: true,
      srcAvatar: ``
    },
    position: [1, 1],
    city: ``
  }
];

describe(`Test Apartment list`, () => {

  it(`<ApartmentList /> should render list`, () => {
    const tree = renderer
      .create(
          <ApartmentList
            offersShow={offersShow}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

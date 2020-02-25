import React from "react";
import renderer from "react-test-renderer";
import ApartmentDetailInfo from "./apartment-detail-info.jsx";

const offer = {
  id: 1,
  title: `Beautiful apartment`,
  price: 120,
  srcImg: `img/apartment-01.jpg`,
  srcGallery: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
  description: `All super long text about apartmmnet with cools stuffs`,
  premium: true,
  type: `Room`,
  rate: 4.8,
  bedrooms: 3,
  maxGuests: 4,
  apartmentStuff: [`Wifi`, `Cable TV`, `Kitchen`],
  ownerInfo: {
    name: `Jon`,
    super: true,
    srcAvatar: `img/avatar-max.jpg`
  }
};

it(`<ApartmentDetailInfo /> should render apartment-detail-info page `, () => {
  const tree = renderer
      .create(
          <ApartmentDetailInfo
            offer={offer}/>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

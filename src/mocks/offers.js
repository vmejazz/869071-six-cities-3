const offersArray = [
  {
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
    },
    position: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    title: `Perfect apartment`,
    price: 200,
    srcImg: `img/apartment-02.jpg`,
    srcGallery: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `All super long text about apartmmnet with cools stuffs`,
    premium: false,
    type: `House`,
    rate: 1,
    bedrooms: 3,
    maxGuests: 4,
    apartmentStuff: [`wifi`, `Cable TV`, `Kitchen`],
    ownerInfo: {
      name: `Jon`,
      super: true,
      srcAvatar: `img/avatar-max.jpg`
    },
    position: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    title: `Imagine apartment`,
    price: 250,
    srcImg: `img/apartment-03.jpg`,
    srcGallery: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `All super long text about apartmmnet with cools stuffs`,
    premium: false,
    type: `Apartment`,
    rate: 3,
    bedrooms: 3,
    maxGuests: 4,
    apartmentStuff: [`wifi`, `Cable TV`, `Kitchen`],
    ownerInfo: {
      name: `Jon`,
      super: true,
      srcAvatar: `img/avatar-max.jpg`
    },
    position: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4,
    title: `Best of the best apartment`,
    price: 400,
    srcImg: `img/apartment-01.jpg`,
    srcGallery: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `All super long text about apartmmnet with cools stuffs`,
    premium: false,
    type: `Apartment`,
    rate: 2.2,
    bedrooms: 3,
    maxGuests: 4,
    apartmentStuff: [`wifi`, `Cable TV`, `Kitchen`],
    ownerInfo: {
      name: `Jon`,
      super: false,
      srcAvatar: `img/avatar-max.jpg`
    },
    position: [52.3809553943508, 4.939309666406198]
  }
];

export default offersArray;

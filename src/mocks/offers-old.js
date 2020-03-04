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
    position: [52.3909553943508, 4.85309666406198],
    city: `Amsterdam`
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
    position: [50.938014, 6.958104],
    city: `Cologne`
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
    position: [52.3909553943508, 4.929309666406198],
    city: `Amsterdam`
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
    position: [48.858764, 2.348802],
    city: `Paris`
  },
  {
    id: 5,
    title: `Best of the best apartment`,
    price: 410,
    srcImg: `img/apartment-01.jpg`,
    srcGallery: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `All super long text about apartmmnet with cools stuffs`,
    premium: false,
    type: `Apartment`,
    rate: 2.3,
    bedrooms: 2,
    maxGuests: 1,
    apartmentStuff: [`wifi`, `Cable TV`, `Kitchen`],
    ownerInfo: {
      name: `Jon`,
      super: false,
      srcAvatar: `img/avatar-max.jpg`
    },
    position: [48.885315, 2.392618],
    city: `Paris`
  },
  {
    id: 6,
    title: `Best of the best apartment`,
    price: 300,
    srcImg: `img/apartment-01.jpg`,
    srcGallery: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `All super long text about apartmmnet with cools stuffs`,
    premium: false,
    type: `Apartment`,
    rate: 2.3,
    bedrooms: 2,
    maxGuests: 1,
    apartmentStuff: [`wifi`, `Cable TV`, `Kitchen`],
    ownerInfo: {
      name: `Jon`,
      super: false,
      srcAvatar: `img/avatar-max.jpg`
    },
    position: [48.893126, 2.281553],
    city: `Paris`
  },
  {
    id: 7,
    title: `Perfect apartment`,
    price: 100,
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
    position: [50.970204, 6.883537],
    city: `Cologne`
  },
  {
    id: 8,
    title: `Perfect apartment`,
    price: 230,
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
    position: [50.908164, 6.929199],
    city: `Cologne`
  },
  {
    id: 9,
    title: `Perfect apartment`,
    price: 260,
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
    position: [50.989276, 6.972457],
    city: `Cologne`
  },
  {
    id: 10,
    title: `Perfect apartment`,
    price: 120,
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
    position: [50.934422, 6.974174],
    city: `Cologne`
  },
  {
    id: 11,
    title: `Perfect apartment`,
    price: 126,
    srcImg: `img/apartment-02.jpg`,
    srcGallery: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `All super long text about apartmmnet with cools stuffs`,
    premium: false,
    type: `House`,
    rate: 4,
    bedrooms: 3,
    maxGuests: 4,
    apartmentStuff: [`wifi`, `Cable TV`, `Kitchen`],
    ownerInfo: {
      name: `Jon`,
      super: true,
      srcAvatar: `img/avatar-max.jpg`
    },
    position: [50.934422, 6.972457],
    city: `Cologne`
  }
];

export default offersArray;

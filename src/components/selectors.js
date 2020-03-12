// import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getActiveCity = (state) => {
  return state.DATA.activeCity;
};

export const getCityes = (state) => {
  return state.DATA.cityes;
};

// export const getOffersShow = createSelector(
//     getOffers,
//     getActiveCity,
//     (offers, city) => {
//       return console.log(offers, city);
//     }
// );

// export const getOffersShow = createSelector(
//     getOffers,
//     getActiveCity,
//     (offers, activeCity) => {
//       return offers.filter((item) => {
//         return item.city === activeCity;
//       });
//     }
// );

// export const getPopularOffer = createSelector(
//     getOffersShow,
//     (offersShow) => {
//       return offersShow.slice();
//     }
// );

// export const getLowToHight = createSelector(
//     getOffersShow,
//     (offersShow) => {
//       return offersShow.slice()
//                         .sort((a, b) => a.price - b.price);
//     }
// );

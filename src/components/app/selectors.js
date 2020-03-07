import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getActiveCity = (state) => {
  return state.DATA.activeCity;
};

export const getOffersShow = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => {
      return console.log(offers, city);
    }
);

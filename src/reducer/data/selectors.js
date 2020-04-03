import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getCommentPostStatus = (state) => {
  return state[NAME_SPACE].commentPostError;
};

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getActiveCity = (state) => {
  return state[NAME_SPACE].activeCity;
};

export const getCityes = (state) => {
  return state[NAME_SPACE].cityes;
};

export const getActiveOfferId = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

export const getOffersFavorite = (state) => {
  return state[NAME_SPACE].offersFavorite;
};

export const getCityesFavorite = (state) => {
  return state[NAME_SPACE].cityesFavorite;
};

export const getOffersNearby = (state) => {
  return state[NAME_SPACE].offersNearby;
};

export const gethoverCardId = (state) => {
  return state[NAME_SPACE].hoverCardId;
};

export const getOpenOffer = (state, id) => {
  return state[NAME_SPACE].offers.find((item) => item.id === Number(id.activeOfferId));
};

export const getOffersShow = createSelector(
    getOffers,
    getActiveCity,
    (offers, activeCity) => {
      return offers.filter((item) => {
        return item.city === activeCity;
      });
    }
);

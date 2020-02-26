import offers from "./mocks/offers.js";
import {extend} from "./utils.js";

const initialState = {
  activeCity: `AMSTERDAM`,
  activeOfferId: -1,
  offers,
  offersShow: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  OPEN_OFFER: `OPEN_OFFER`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: ``
  }),
  openOffer: (id) => ({
    type: ActionType.OPEN_OFFER,
    payload: id
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_OFFER:
      return extend(state, {
        // activeCity: action.payload.toUpperCase(),
        activeOfferId: action.payload
      });
    case ActionType.GET_OFFERS:
      state.offersShow = state.offers.filter((item) => {
        return state.activeCity === item.city.toUpperCase();
      });
      return state;
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};

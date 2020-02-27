import offers from "./mocks/offers.js";
import cityes from "./mocks/cityes.js";
import {extend} from "./utils.js";

const initialState = {
  activeCity: Object.keys(cityes)[0],
  activeOfferId: -1,
  offers,
  offersShow: offers.filter((item) => {
    return item.city === Object.keys(cityes)[0];
  }),
  cityes,
  hoverCardId: -1
};
// const initialState = {
//   activeCity: ``,
//   activeOfferId: -1,
//   offers: [],
//   offersShow: []
// };

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  OPEN_OFFER: `OPEN_OFFER`,
  SET_HOVER_CARD_ID: `SET_HOVER_CARD_ID`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city
  }),
  openOffer: (id) => ({
    type: ActionType.OPEN_OFFER,
    payload: id
  }),
  setHoverCardId: (id) => ({
    type: ActionType.SET_HOVER_CARD_ID,
    payload: id
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_OFFER:
      return extend(state, {
        activeOfferId: action.payload
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
        offersShow: offers.filter((item) => {
          return action.payload === item.city;
        })
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        activeCity: action.payload,
        offersShow: offers.filter((item) =>{
          return action.payload === item.city;
        })
      });
    case ActionType.SET_HOVER_CARD_ID:
      return extend(state, {
        hoverCardId: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};

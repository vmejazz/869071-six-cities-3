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
  ON_CARD_HOVER: `ON_CARD_HOVER`,
  SORT_OFFERS_DIRECT: `SORT_OFFERS_DIRECT`,
  SORT_OFFERS_REVERSE: `SORT_OFFERS_REVERSE`
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
  onCardHover: (id) => ({
    type: ActionType.ON_CARD_HOVER,
    payload: id
  }),
  sortOffersDirect: (param) => ({
    type: ActionType.SORT_OFFERS_DIRECT,
    payload: param
  }),
  sortOffersReverse: (param) => ({
    type: ActionType.SORT_OFFERS_REVERSE,
    payload: param
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
    case ActionType.ON_CARD_HOVER:
      return extend(state, {
        hoverCardId: action.payload
      });
    case ActionType.SORT_OFFERS_DIRECT:
      return extend(state, {
        offersShow: offers.sort((a, b) => {
          return a[action.payload] - b[action.payload];
        })
      });
    case ActionType.SORT_OFFERS_REVERSE:
      return (
        extend(state, {
          offersShow: offers.sort((a, b) => {
            return b[action.payload] - a[action.payload];
          })
        })
      );
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};

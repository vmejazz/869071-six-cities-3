import offers from "./mocks/offers.js";

const initialState = {
  activeCity: `AMSTERDAM`,
  activeOfferId: -1,
  offers,
  offersShow: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: ``
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      state.activeCity = action.payload.toUpperCase();
      state.activeOfferId = 2;
      return state;
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

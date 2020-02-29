import {reducer, ActionType} from "./reducer.jsx";
jest.mock(`./mocks/offers.js`, () => (
  [{id: 1, city: `Paris`}, {id: 2, city: `Moscow`}]
));

const state = {
  activeCity: `Paris`,
  activeOfferId: -1,
  offers: [],
  offersShow: []
};

describe(`Test store-state change with Reducer `, () => {

  it(`Reducer return state without anyone action`, () => {
    expect(reducer(state, {})).toEqual({
      activeCity: `Paris`,
      activeOfferId: -1,
      offers: [],
      offersShow: []
    });
  });

  it(`Reducer OPEN_OFFER `, () => {
    expect(reducer({
      activeOfferId: -1
    }, {
      type: ActionType.OPEN_OFFER,
      payload: 1
    })).toEqual({
      activeOfferId: 1
    });
  });

  it(`Reducer CHANGE_CITY `, () => {
    expect(reducer({
      activeCity: ``
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Tokio`
    })).toEqual({
      activeCity: `Tokio`,
      offersShow: []
    });
  });

  it(`Reducer GET_OFFERS`, () => {
    expect(reducer({
      activeCity: ``,
      offers: [{id: 1, city: `Paris`}, {id: 2, city: `Moscow`}],
      offersShow: []
    }, {
      type: ActionType.GET_OFFERS,
      payload: `Moscow`
    })).toEqual({
      activeCity: `Moscow`,
      offers: [{id: 1, city: `Paris`}, {id: 2, city: `Moscow`}],
      offersShow: [{id: 2, city: `Moscow`}]
    });
  });

  it(`Reducer SORT_OFFERS_DIRECT `, () => {
    expect(reducer({
      activeCity: ``,
      offers: [],
      offersShow: [{id: 1, price: 110}, {id: 2, price: 90}]
    }, {
      type: ActionType.SORT_OFFERS_DIRECT,
      payload: `price`
    })).toEqual({
      activeCity: ``,
      offers: [],
      offersShow: [{id: 2, price: 90}, {id: 1, price: 110}]
    });
  });

  it(`Reducer SORT_OFFERS_REVERSE `, () => {
    expect(reducer({
      activeCity: ``,
      offers: [],
      offersShow: [{id: 1, price: 10}, {id: 2, price: 900}]
    }, {
      type: ActionType.SORT_OFFERS_REVERSE,
      payload: `price`
    })).toEqual({
      activeCity: ``,
      offers: [],
      offersShow: [{id: 2, price: 900}, {id: 1, price: 10}]
    });
  });

});

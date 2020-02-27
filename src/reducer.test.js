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

});

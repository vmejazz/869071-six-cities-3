import {reducer, ActionType} from "./reducer.jsx";

const state = {
  activeCity: `Paris`,
  activeOfferId: -1,
  offers: [],
  offersShow: []
};

describe(`Test render App component`, () => {

  it(`Reducer create initialState without params`, () => {
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
      offers: [{id: 1, city: `Paris`}],
      offersShow: []
    }, {
      type: ActionType.GET_OFFERS,
      payload: `Jobra`
    })).toEqual({
      activeCity: `Jobra`,
      offers: [{id: 1, city: `Paris`}],
      offersShow: []
    });
  });

});

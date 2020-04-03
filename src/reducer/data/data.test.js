import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./data.js";

const api = createAPI(() => {});
const offers = [
  {
    id: 1,
    someStuff: `one`
  },
  {
    id: 2,
    someStuff: `two`
  }
];

it(`Reducer create inistialState`, () => {

  expect(reducer(void 0, {})).toEqual({
    activeCity: `Paris`,
    activeOfferId: -1,
    cityesFavorite: [],
    commentPostError: false,
    offers: [],
    offersFavorite: [],
  });
});

it(`Reducer load offers to store`, () => {
  expect(reducer({
    activeCity: 1,
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })).toEqual({
    0: {
      id: 1,
      someStuff: `one`,
    },
    1: {
      id: 2,
      someStuff: `two`,
    },
    activeCity: 1,
  });
});

it(`Reducer load favorites to store`, () => {
  expect(reducer({
    activeCity: 1,
  }, {
    type: ActionType.LOAD_FAVORITES,
    payload: offers
  })).toEqual({
    0: {
      id: 1,
      someStuff: `one`,
    },
    1: {
      id: 2,
      someStuff: `two`,
    },
    activeCity: 1,
  });
});

it(`Reducer openOfferId`, () => {
  expect(reducer({
    activeOfferId: 1,
  }, {
    type: ActionType.OPEN_OFFER,
    payload: 5
  })).toEqual({
    activeOfferId: 5
  });
});

it(`Reducer onCardHover`, () => {
  expect(reducer({
    hoverCardId: 1,
  }, {
    type: ActionType.ON_CARD_HOVER,
    payload: 3
  })).toEqual({
    hoverCardId: 3
  });
});


it(`Reducer sort direct`, () => {
  expect(reducer({
    offers: [
      {
        id: 1
      },
      {
        id: 3
      },
      {
        id: 2
      }
    ],
    hoverCardId: 1,
  }, {
    type: ActionType.SORT_OFFERS_DIRECT,
    payload: `id`
  })).toEqual({
    offers: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ],
    hoverCardId: 1
  });
});

it(`Reducer sort reverse`, () => {
  expect(reducer({
    offers: [
      {
        id: 1
      },
      {
        id: 3
      },
      {
        id: 2
      }
    ],
    hoverCardId: 1,
  }, {
    type: ActionType.SORT_OFFERS_REVERSE,
    payload: `id`
  })).toEqual({
    offers: [
      {
        id: 3
      },
      {
        id: 2
      },
      {
        id: 1
      }
    ],
    hoverCardId: 1
  });
});

it(`Reducer change City`, () => {
  expect(reducer({
    offers: [
      {
        id: 1,
        city: `Berlin`
      },
      {
        id: 3,
        city: `Paris`
      },
      {
        id: 2,
        city: `Moscow`
      }
    ],
    activeCity: `London`,
    offersShow: []
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Berlin`
  })).toEqual({
    offers: [
      {
        id: 1,
        city: `Berlin`
      },
      {
        id: 3,
        city: `Paris`
      },
      {
        id: 2,
        city: `Moscow`
      }
    ],
    activeCity: `Berlin`,
    offersShow: [
      {
        id: 1,
        city: `Berlin`
      }
    ]
  });
});

it(`Reducer set Favorite`, () => {
  expect(reducer({
    offers: [
      {
        id: 1,
        favorite: false
      },
      {
        id: 3,
        favorite: false
      },
      {
        id: 2,
        favorite: true
      }
    ],
  }, {
    type: ActionType.SET_FAVOTIRE,
    payload: {
      id: 1,
      favorite: true
    }
  })).toEqual({
    offers: [
      {
        id: 1,
        favorite: true
      },
      {
        id: 3,
        favorite: false
      },
      {
        id: 2,
        favorite: true
      }
    ],
  });
});

it(`Reducer get reviews`, () => {
  expect(reducer({
    id: 1
  }, {
    type: ActionType.GET_REVIEWS,
    payload: [{
      comment: `some comment`,
      id: 5
    }]
  })).toEqual({
    0: {
      comment: `some comment`,
      id: 5
    },
    id: 1
  });
});

it(`Reducer get nearby offers`, () => {
  expect(reducer({
    activeCity: 1,
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })).toEqual({
    0: {
      id: 1,
      someStuff: `one`,
    },
    1: {
      id: 2,
      someStuff: `two`,
    },
    activeCity: 1,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const comment = {
      comment: `one two`,
      rating: `4`
    };
    const commentSend = Operation.commentPost(comment, `2`);


    apiMock
      .onPost(`/comments/2`, comment)
      .reply(200, [{fake: true}]);

    return commentSend(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_REVIEWS,
          payload: {
            reviews: [{
              fake: true
            }]
          }
        });
      });
  });
});


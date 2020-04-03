import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./offer.js";

const api = createAPI(() => {});
const reviews = {
  reviews: [
    {
      id: 1,
      comment: `one`
    },
    {
      id: 2,
      comment: `two`
    }
  ]
};

it(`Reducer create inistialState`, () => {

  expect(reducer(void 0, {})).toEqual({
    reviews: []
  });
});

it(`Reducer set reviews to store`, () => {
  expect(reducer({
    reviews: [],
  }, {
    type: ActionType.GET_REVIEWS,
    payload: reviews
  })).toEqual({
    reviews: [
      {
        id: 1,
        comment: `one`
      },
      {
        id: 2,
        comment: `two`
      }
    ]
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /comments`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getReviews = Operation.getReviews(2);

    apiMock
      .onGet(`/comments/2`)
      .reply(200, [{fake: true}]);

    return getReviews(dispatch, () => {}, api)
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

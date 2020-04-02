import {extend} from "../utils.js";
// import ParseData from "../data/parse-data.js";

const initialState = {
  reviews: []
};

const ActionType = {
  GET_REVIEWS: `GET_REVIEWS`,
};

const ActionCreator = {
  setReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews
  }),
};

const Operation = {
  getReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        dispatch(ActionCreator.setReviews({
          reviews: response
        }));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_REVIEWS:
      return extend(state, action.payload);
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};

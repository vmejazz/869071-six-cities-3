import {extend} from "../utils.js";
import ParseData from "../parse-data.js";

const initialState = {
  offers: [],
  activeOfferId: -1,
  activeCity: `Paris`,
  offersFavorite: [],
  cityesFavorite: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_OFFER: `OPEN_OFFER`,
  ON_CARD_HOVER: `ON_CARD_HOVER`,
  SORT_OFFERS_DIRECT: `SORT_OFFERS_DIRECT`,
  SORT_OFFERS_REVERSE: `SORT_OFFERS_REVERSE`,
  SET_FAVOTIRE: `SET_FAVORITE`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  GET_REVIEWS: `GET_REVIEWS`,
  LOAD_NEARBY: `LOAD_NEARBY`,
  POST_COMMENT: `POST_COMMENT`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
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
  }),
  changeBookmarkStatus: (offer) => ({
    type: ActionType.SET_FAVOTIRE,
    payload: offer
  }),
  setReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews
  }),
  loadNearby: (offersNearby) => ({
    type: ActionType.LOAD_NEARBY,
    payload: offersNearby
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const ParseDataModel = new ParseData(response);
        const offersParsed = ParseDataModel.toRaw();
        const cityes = ParseDataModel.toCityes();
        dispatch(ActionCreator.loadOffers({
          offers: offersParsed,
          cityes,
          activeCity: Object.keys(cityes)[0],
          offersShow: offersParsed.filter((item) => {
            return item.city === Object.keys(cityes)[0];
          })
        }));
      })
      .catch(() => {});
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const ParseDataModel = new ParseData(response);
        const offersParsed = ParseDataModel.toRaw();
        const cityes = ParseDataModel.toCityes();
        dispatch(ActionCreator.loadFavorites({
          offersFavorite: offersParsed,
          cityesFavorite: cityes,
        }));
      })
      .catch(() => {});
  },

  changeBookmark: (offerId, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/${status}`)
      .then((response) => {
        const ParseDataModel = new ParseData([response]);
        const offerParsed = ParseDataModel.toRaw();

        dispatch(ActionCreator.changeBookmarkStatus(offerParsed[0]));
      })
      .catch(() => {});
  },

  getReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        response.sort((a, b) => b.date - a.date);
        dispatch(ActionCreator.setReviews({
          reviews: response
        }));
      })
      .catch(() => {});
  },

  loadNearby: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        const ParseDataModel = new ParseData(response);
        const offersParsed = ParseDataModel.toRaw();
        // const cityes = ParseDataModel.toCityes();
        dispatch(ActionCreator.loadNearby({
          offersNearby: offersParsed,
          // cityesFavorite: cityes,
        }));
      })
      .catch(() => {});
  },

  commentPost: (comment, offerId) => (dispatch, getState, api) =>{
    return api.post(`/comments/${offerId}`, {
      comment: comment.comment,
      rating: comment.rating
    })
      .then((response) => {
        dispatch(ActionCreator.setReviews({
          reviews: response
        }));
      });

  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, action.payload);
    case ActionType.LOAD_FAVORITES:
      return extend(state, action.payload);
    case ActionType.OPEN_OFFER:
      return extend(state, {
        activeOfferId: action.payload
      });
    case ActionType.ON_CARD_HOVER:
      return extend(state, {
        hoverCardId: action.payload
      });
    case ActionType.SORT_OFFERS_DIRECT:
      return extend(state, {
        offers: state.offers
          .slice()
          .sort((a, b) => {
            return a[action.payload] - b[action.payload];
          })
      });
    case ActionType.SORT_OFFERS_REVERSE:
      return (
        extend(state, {
          offers: state.offers
            .slice()
            .sort((a, b) => {
              return b[action.payload] - a[action.payload];
            })
        })
      );
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
        offersShow: state.offers.filter((item) => {
          return action.payload === item.city;
        })
      });
    case ActionType.SET_FAVOTIRE:
      const offersArray = state.offers.map((item) => item.id === action.payload.id ? action.payload : item);

      return extend(state, {
        offers: offersArray
      });
    case ActionType.GET_REVIEWS:
      return extend(state, action.payload);
    case ActionType.LOAD_NEARBY:
      return extend(state, action.payload);
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};

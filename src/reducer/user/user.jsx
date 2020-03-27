import {extend} from "../utils.js";
import ParseData from "../parse-data.js";

const ERROR_STATUS = {
  AUTH: 401,
  BAD_REQUEST: 400
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  bookmarksRequired: false
};

const ActionType = {
  AUTH_INFO: `AUTH_INFO`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REQUIRED_BOOKMARKS: `REQUIRED_BOOKMARKS`,
  REQUIRED_FAVORITES: `REQUIRED_FAVORITES`,
};

const ActionCreator = {
  setAuthInfo: (authInfo) => {
    return {
      type: ActionType.AUTH_INFO,
      payload: authInfo
    };
  },
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  requireBookmarks: (status) => ({
    type: ActionType.REQUIRED_BOOKMARKS,
    payload: status
  }),
  requireFavorites: (offers) => ({
    type: ActionType.REQUIRED_FAVORITES,
    payload: offers
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_INFO:
      return extend(state, action.payload);
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.REQUIRED_BOOKMARKS:
      return extend(state, {
        bookmarksRequired: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setAuthInfo(response));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        switch (err.response.status) {
          case ERROR_STATUS.AUTH:
            break;
          case ERROR_STATUS.BAD_REQUEST:
            // console.log(`Переданны не все данные`);
            break;
          default:
            break;
        }
        throw err;
      });
  },

  loginIn: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireBookmarks(true));
        dispatch(ActionCreator.setAuthInfo(response));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        switch (err.response.status) {
          case ERROR_STATUS.AUTH:
            // console.log(`Вы не авторизованы`);
            break;
          case ERROR_STATUS.BAD_REQUEST:
            // console.log(`Переданны не все данные`);
            break;
          default:
            break;
        }
        throw err;
      });
  },

  checkBookmarks: () => (dispatch) => {
    return dispatch(ActionCreator.requireBookmarks(true));
  },

  getOffersFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const ParseDataModel = new ParseData(response);
        const offersParsed = ParseDataModel.toRaw();
        const cityes = ParseDataModel.toCityes();
        dispatch(ActionCreator.requireFavorites({
          offers: offersParsed,
          cityes,
        }));
      });
  },
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};

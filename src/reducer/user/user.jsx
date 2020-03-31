import {extend} from "../utils.js";

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
  bookmarksRequired: false,
  setCheckedStatus: false,
};

const ActionType = {
  AUTH_INFO: `AUTH_INFO`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REQUIRED_BOOKMARKS: `REQUIRED_BOOKMARKS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  IS_CHECKED: `IS_CHECKED`
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
  setCheckedStatus: (status) => ({
    type: ActionType.IS_CHECKED,
    payload: status
  })
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
    case ActionType.IS_CHECKED:
      return extend(state, {
        isCheckedStatus: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthInfo(response));
        dispatch(ActionCreator.setCheckedStatus(true));
      })
      .catch((err) => {
        switch (err.response.status) {
          case ERROR_STATUS.AUTH:
            dispatch(ActionCreator.setCheckedStatus(true));
            break;
          case ERROR_STATUS.BAD_REQUEST:
            dispatch(ActionCreator.setCheckedStatus(true));
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
        dispatch(ActionCreator.setCheckedStatus(true));
      })
      .catch((err) => {
        switch (err.response.status) {
          case ERROR_STATUS.AUTH:
            dispatch(ActionCreator.setCheckedStatus(true));
            break;
          case ERROR_STATUS.BAD_REQUEST:
            dispatch(ActionCreator.setCheckedStatus(true));
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
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};

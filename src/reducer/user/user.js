import {extend} from "../utils.js";

const ErrorStatus = {
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
  showRequestModal: false
};

const ActionType = {
  AUTH_INFO: `AUTH_INFO`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REQUIRED_BOOKMARKS: `REQUIRED_BOOKMARKS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  IS_CHECKED: `IS_CHECKED`,
  SHOW_REQUEST_MODAL: `SHOW_REQUEST_MODAL`
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
  }),
  toggleRequestModal: (status) => ({
    type: ActionType.SHOW_REQUEST_MODAL,
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
    case ActionType.SHOW_REQUEST_MODAL:
      return extend(state, {
        showRequestModal: action.payload
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
        dispatch(ActionCreator.setCheckedStatus(true));
      })
      .catch(() => {
        dispatch(ActionCreator.setCheckedStatus(true));
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
        dispatch(ActionCreator.setCheckedStatus(true));

        switch (err.status) {
          case ErrorStatus.BAD_REQUEST:
            dispatch(ActionCreator.toggleRequestModal(true));
            break;
          default:
            break;
        }
      });
  },

  checkBookmarks: () => (dispatch) => {
    return dispatch(ActionCreator.requireBookmarks(true));
  },

  hideRequestModal: () => (dispatch) => {
    return dispatch(ActionCreator.toggleRequestModal(false));
  }
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};

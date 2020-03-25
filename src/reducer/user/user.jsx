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
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTH_INFO: `AUTH_INFO`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setAuthInfo: (authInfo) => {
    return {
      type: ActionType.AUTH_INFO,
      payload: authInfo
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.AUTH_INFO:
      return extend(state, action.payload);
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        // dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
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

  loginIn: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
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
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};

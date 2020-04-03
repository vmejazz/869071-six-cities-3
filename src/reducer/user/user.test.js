import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation, AuthorizationStatus} from "./user.js";

const api = createAPI(() => {});
const userInfo = {
  id: 1,
  email: `asd@gmail.com`,
  name: `asd`,
};

it(`Reducer create inistialState`, () => {

  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isCheckedStatus: false,
    showRequestModal: false
  });
});

it(`Reducer set userInfo to store`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }, {
    type: ActionType.AUTH_INFO,
    payload: userInfo
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    id: 1,
    email: `asd@gmail.com`,
    name: `asd`,
  });
});

it(`Reducer REQUIRED_AUTHORIZATION to store`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: `AUTH`
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });
});

it(`Reducer set IS_CHECKED to store`, () => {
  expect(reducer({
    isCheckedStatus: false
  }, {
    type: ActionType.IS_CHECKED,
    payload: true
  })).toEqual({
    isCheckedStatus: true
  });
});

it(`Reducer SHOW_REQUEST_MODAL to store`, () => {
  expect(reducer({
    showRequestModal: false
  }, {
    type: ActionType.SHOW_REQUEST_MODAL,
    payload: true
  })).toEqual({
    showRequestModal: true
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to get /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const getUserInfo = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return getUserInfo(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: [
            {
              fake: true,
            },
          ],
          type: `AUTH_INFO`,
        });
      });
  });

  it(`Should make a correct API call to post /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const singInInfo = {
      email: `test@mail.com`,
      password: `123`
    };
    const setUserInfo = Operation.loginIn(singInInfo);

    apiMock
      .onPost(`/login`, singInInfo)
      .reply(200, [{fake: true}]);

    return setUserInfo(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: [
            {
              fake: true,
            },
          ],
          type: `AUTH_INFO`,
        });
      });
  });
});

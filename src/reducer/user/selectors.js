import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getStatusRequestModal = (state) => {
  return state[NAME_SPACE].showRequestModal;
};

export const getUser = (state) => {
  return state[NAME_SPACE];
};


export const getAutorisationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getCheckedStatus = (state) => {
  return state[NAME_SPACE].isCheckedStatus;
};

import axios from "axios";

const ErrorMap = {
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};

const SUCCESS_CODE = 200;

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    if (response.status === SUCCESS_CODE) {
      return response.data;
    } else {
      return response;
    }
  };

  const onFail = (err) => {
    const {response = ``} = err;
    switch (response.status) {
      case ErrorMap.NOT_FOUND:
        throw err;
      case ErrorMap.UNAUTHORIZED:
        onUnauthorized();
        throw err;
      case ErrorMap.BAD_REQUEST:
        console.log(`не полный запрос`);
        throw err;
      // default:
      //   throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};

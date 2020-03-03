import axios from "axios";

const ErrorMap = {
  NOT_FOUND: 404,
  UNAUTHORIZED: 401
};

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case ErrorMap.NOT_FOUND:
        console.log(`Ответ не найден`);
        break;
      case ErrorMap.UNAUTHORIZED:
        console.log(`Не авторизованный пользователь`);
        break;
      default:
        throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};

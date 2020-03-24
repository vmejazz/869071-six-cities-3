import axios from "axios";
import ParseData from "./reducer/data/parse-data.js";

const ErrorMap = {
  NOT_FOUND: 404,
  UNAUTHORIZED: 401
};

const SUCCESS_CODE = 200;

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    if (response.status === SUCCESS_CODE) {
      const ParseDataModel = new ParseData(response.data);
      console.log(response.data)
      const offersParsed = ParseDataModel.toRaw();
      const cityes = ParseDataModel.toCityes();
      return ({
        offers: offersParsed,
        cityes,
        activeCity: Object.keys(cityes)[0],
        offersShow: offersParsed.filter((item) => {
          return item.city === Object.keys(cityes)[0];
        })
      });
    } else {
      return response;
    }
  };

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case ErrorMap.NOT_FOUND:
        break;
      case ErrorMap.UNAUTHORIZED:
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

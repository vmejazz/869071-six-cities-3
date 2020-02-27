import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import offersArray from "./mocks/offers.js";
import cityes from "./mocks/cityes.js";
import {reducer} from "./reducer.jsx";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offersArray={offersArray}
        cityes={cityes}
      />
    </Provider>,
    document.getElementById(`root`)
);

// store.dispatch({
//   type: `CHANGE_CITY`,
//   payload: `paris`
// });

// store.dispatch({
//   type: `GET_OFFERS`,
//   payload: ``
// });

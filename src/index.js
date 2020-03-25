import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.jsx";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import {createAPI} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.jsx";
import {Operation as UserOperation} from "./reducer/user/user.jsx";

const api = createAPI(() => {
  store.dispatch();
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());
// setTimeout(() => {
//   console.log(store.getState());
// }, 1500);

// store.dispatch(UserOperation.login(
//     {email: `pop@gmail.com`, password: `123`}
// ));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);

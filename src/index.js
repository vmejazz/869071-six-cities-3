import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.jsx";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import {createAPI} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.jsx";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user.jsx";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadOffers());
// это пока лишнее
// store.dispatch(DataOperation.loadFavorites());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);

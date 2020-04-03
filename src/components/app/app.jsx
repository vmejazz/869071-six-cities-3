import React from "react";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data.js";
import {Operation as OperationUser} from "../../reducer/user/user.js";
import Main from "../main/main.jsx";
import SingIng from "../sing-in/sing-in.jsx";
import ApartmentDetailInfo from "../apartment-detail-info/apartment-detail-info.jsx";
import {getOffers} from "../../reducer/data/selectors.js";
import {getCheckedStatus} from "../../reducer/user/selectors.js";
import PrivateRoute from "../private-route/private-route.jsx";
import Favorites from "../favorites/favorites.jsx";
import LoadingPage from "../loading-page/loading-page.jsx";
import PageNotFound from "../page-not-found/page-not-forund.jsx";

const App = (props) => {
  const {
    offers,
    isCheckedStatus
  } = props;

  if (offers.length < 1 || !isCheckedStatus) {
    return (
      <LoadingPage />
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}>
          </Route>
          <Route exact path="/login" component={SingIng} />
          <PrivateRoute
            exact
            path="/favorites"
            render={() => {
              return (
                <Favorites />
              );
            }}
          />
          <Route path="/offer/:id?" render={
            (routeProps) =>
              <ApartmentDetailInfo
                activeOfferId={routeProps.match.params.id}
                history={routeProps}
                offers={offers}
              />
          }>
          </Route>
          <Route >
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcImg: PropTypes.string
  })).isRequired,
  offersShow: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcImg: PropTypes.string
  })),
  onApartmentCardClick: PropTypes.func,
  cityes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  ]),
  activeOfferId: PropTypes.number,
  openOffer: PropTypes.func,
  getOffers: PropTypes.func,
  loginIn: PropTypes.func,
  userInfo: PropTypes.object
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  isCheckedStatus: getCheckedStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  openOffer(id) {
    dispatch(
        ActionCreatorData.openOffer(id)
    );
  },
  getOffers() {
    dispatch(
        ActionCreatorData.getOffers()
    );
  },
  loginIn(loginInfo) {
    dispatch(
        OperationUser.loginIn(loginInfo)
    );
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

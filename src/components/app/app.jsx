import React from "react";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data.jsx";
import {Operation as OperationUser} from "../../reducer/user/user.jsx";
import Main from "../main/main.jsx";
import SingIng from "../sing-in/sing-in.jsx";
import ApartmentDetailInfo from "../apartment-detail-info/apartment-detail-info.jsx";
import {getOffers, getOffersShow, getUser, getCityes} from "../selectors.js";
import PrivateRoute from "../private-route/private-route.jsx";
import Favorites from "../favorites/favorites.jsx";
import TestPage from "./test-page.jsx";

const App = (props) => {
  const {
    offers,
    // offersShow,
    // cityes,
    // openOffer,
    // activeOfferId,
    // userInfo
  } = props;

  // const _renderApp = () => {

  //   if (userInfo.bookmarksRequired === true && userInfo.authorizationStatus === `NO_AUTH`) {
  //     return (
  //       <Redirect to="/login" />
  //     );
  //   }
  //   if (offers.length < 1) {
  //     return (
  //       <h2 style={{textAlign: `center`, marginTop: `50px`, fontSize: `28px`}}>
  //         Предложения загружаются...
  //       </h2>
  //     );
  //   }
  //   if (activeOfferId < 1 && offers.length >= 1) {
  //     // console.log(props);

  //     return (
  //       <Main
  //         offerPlacesCount={offersShow.length}
  //         offersShow={offersShow}
  //         onApartmentCardClick={openOffer}
  //         cityes={cityes}
  //       />
  //     );
  //   }
  //   return null;
  //   // } else {
  //   //   return (
  //   //     <ApartmentDetailInfo
  //   //       offer={offersShow.find((item) => item.id === activeOfferId)}
  //   //     />
  //   //   );
  //   // }
  // };

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}>
          {/* {_renderApp()} */}
          {/* <Main
            offerPlacesCount={offersShow.length}
            offersShow={offersShow}
            onApartmentCardClick={openOffer}
            cityes={cityes}
          /> */}
        </Route>
        <PrivateRoute exact path="/favorites" component={Favorites} />
        {/* <Route exact path="/login" >
          <SingIng />
        </Route> */}
        <Route exact path="/login" component={SingIng} />
        <Route path="/offer/:offer?" render={(routeProps) =>
          <ApartmentDetailInfo
            activeOfferId={routeProps.match.params.offer}
            offers={offers}
            // offer={offersShow.find((item) => item.id === activeOfferId)}
          />
        }>
        </Route>
        <Route path="/test/:testNew?" render={(testProps) =>
          <TestPage routeProps={testProps}/>
        } />
        {/* <Route path="/offer/:offerId?" component={ApartmentDetailInfo}/> */}
      </Switch>
    </BrowserRouter>
  );
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
  activeOfferId: PropTypes.number.isRequired,
  openOffer: PropTypes.func,
  getOffers: PropTypes.func,
  loginIn: PropTypes.func,
  userInfo: PropTypes.object
};

const mapStateToProps = (state) => ({
  // pop: getOffersShow,
  // offers: state.DATA.offers,
  offers: getOffers(state),
  // activeCity: state.activeCity,
  activeOfferId: state.DATA.activeOfferId,
  // offers: state.offers,
  // offersShow: state.DATA.offersShow,
  offersShow: getOffersShow(state),
  // cityes: state.DATA.cityes,
  cityes: getCityes(state),
  userInfo: getUser(state)
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
  // parseCityes(offers) {
  //   dispatch(
  //       ActionCreatorData.parseCityes(offers)
  //   );
  // }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

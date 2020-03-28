import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import Favorites from "../favorites/favorites.jsx";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

const PrivateRoute = (props) => {
  const {authorizationStatus} = props;

  return (
    <Route
      render={() => {
        return (
          authorizationStatus === `AUTH`
            ? <Favorites {...props} />
            : <Redirect to="/login" />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  // exact: PropTypes.bool.isRequired,
  // path: PropTypes.string.isRequired,
  // render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);

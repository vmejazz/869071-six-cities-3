import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getUser} from "../../reducer/user/selectors.js";

const UserProfile = (props) => {
  const {userInfo} = props;
  let authStatus = userInfo.authorizationStatus === `AUTH` ? true : false;

  return (
    <React.Fragment>
      <div className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className=
          {`${authStatus ? `header__user-name user__name` : `header__login`}`}
        >
          <Link to={`${authStatus ? `/favorites` : `/login`}`}>
            { authStatus ? userInfo.email : `Sing in`}
          </Link>
        </span>
      </div>
    </React.Fragment>
  );
};

UserProfile.propTypes = {
  userInfo: PropTypes.object
};

const mapStateToProps = (state) => ({
  userInfo: getUser(state)
});


export {UserProfile};
export default connect(mapStateToProps)(UserProfile);


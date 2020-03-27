import React from "react";
import {getUser} from "../selectors.js";
import {Operation as OperationUser} from "../../reducer/user/user.jsx";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const BookmarkButton = (props) => {
  const {checkBookmarks} = props;

  return (
    <button className="place-card__bookmark-button button" type="button"
      onClick={
        (evt) => {
          evt.stopPropagation();
          checkBookmarks();
        }
      }
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};


BookmarkButton.propTypes = {
  checkBookmarks: PropTypes.func
};

const mapStateToProps = (state) => ({
  userInfo: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  checkBookmarks() {
    dispatch(
        OperationUser.checkBookmarks()
    );
  }
});

export {BookmarkButton};
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);

import React from "react";
import {getUser} from "../selectors.js";
import {Operation as OperationData} from "../../reducer/data/data.jsx";
import {Operation as OperationUser} from "../../reducer/user/user.jsx";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const BookmarkButton = (props) => {
  const {checkBookmarks, changeBookmark, offerId, userInfo} = props;
  let {favorite} = props;

  let buttonClassname = `place-card__bookmark-button${favorite ? `--active` : ``} button`;

  if (userInfo.authorizationStatus === `AUTH`) {
    return (
      <button className={buttonClassname} type="button"
        onClick={
          (evt) => {
            evt.stopPropagation();
            checkBookmarks();
            changeBookmark(offerId, favorite ? 0 : 1);
          }
        }
      >
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  } else {
    return (
      <Link className={buttonClassname} type="button"
        to={`/login`}
        onClick={
          (evt) => {
            evt.stopPropagation();
            checkBookmarks();
            changeBookmark(offerId, favorite ? 0 : 1);
          }
        }
      >
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </Link>
    );
  }
};


BookmarkButton.propTypes = {
  checkBookmarks: PropTypes.func,
  changeBookmark: PropTypes.func,
  offerId: PropTypes.number,
  favorite: PropTypes.bool
};

const mapStateToProps = (state) => ({
  userInfo: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  checkBookmarks() {
    dispatch(
        OperationUser.checkBookmarks()
    );
  },
  changeBookmark(id, status) {
    dispatch(
        OperationData.changeBookmark(id, status)
    );
  },
});

export {BookmarkButton};
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);

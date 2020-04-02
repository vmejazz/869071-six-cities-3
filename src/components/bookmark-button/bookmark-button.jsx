import React from "react";
import {getUser} from "../selectors.js";
import {Operation as OperationData} from "../../reducer/data/data.js";
import {Operation as OperationUser} from "../../reducer/user/user.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const BookmarkButton = (props) => {
  const {checkBookmarks, changeBookmark, offerId, userInfo, detailPage} = props;
  let {favorite} = props;

  let buttonClassname = `place-card__bookmark-button${favorite ? `--active` : ``} button`;

  if (userInfo.authorizationStatus === `AUTH`) {
    return (
      <button
        className={detailPage
          ? `property__bookmark-button button ${favorite ? `property__bookmark-button--active` : ``}`
          : `${buttonClassname}`}
        type="button"
        onClick={
          (evt) => {
            evt.stopPropagation();
            checkBookmarks();
            changeBookmark(offerId, favorite ? 0 : 1);
          }
        }
      >
        <svg className="place-card__bookmark-icon" width={detailPage ? `31` : `18`} height={detailPage ? `33` : `19`}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  } else {
    return (
      <Link
        className={detailPage
          ? `property__bookmark-button button ${favorite ? `property__bookmark-button--active` : ``}`
          : `${buttonClassname}`}
        type="button" to={`/login`}
        onClick={
          (evt) => {
            evt.stopPropagation();
            checkBookmarks();
            changeBookmark(offerId, favorite ? 0 : 1);
          }
        }
      >
        <svg className="place-card__bookmark-icon" width={detailPage ? `31` : `18`} height={detailPage ? `33` : `19`}>
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

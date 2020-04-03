import React from "react";
import {Operation as OperationData} from "../../reducer/data/data.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ReviewsForm = (props) => {
  const {review, buttonStatus, changeCommentInfo, resetReviewForm, commentPost, offerId} = props;

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        commentPost(review, offerId);
        resetReviewForm();
        evt.target.reset();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio"
          onChange={changeCommentInfo}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio"
          onChange={changeCommentInfo}

        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio"

          onChange={changeCommentInfo}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio"
          onChange={changeCommentInfo}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio"
          onChange={changeCommentInfo}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="comment" name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``}
        onChange={changeCommentInfo}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={buttonStatus}>Submit</button>
      </div>
    </form>
  );
};


ReviewsForm.propTypes = {
  commentPost: PropTypes.func,
  offerId: PropTypes.number,
  review: PropTypes.shape({
    comment: PropTypes.string,
    rating: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }),
  buttonStatus: PropTypes.bool.isRequired,
  changeCommentInfo: PropTypes.func,
  resetReviewForm: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({

  commentPost(commentInfo, offerId) {
    dispatch(
        OperationData.commentPost(commentInfo, offerId)
    );
  }
});

export {ReviewsForm};
export default connect(null, mapDispatchToProps)(ReviewsForm);

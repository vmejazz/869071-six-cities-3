import React, {PureComponent} from "react";
import {Operation as OperationData} from "../../reducer/data/data.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comment: ``,
      rating: 0
    };

    this._changeCommentInfo = this._changeCommentInfo.bind(this);
    this._resetState = this._resetState.bind(this);
  }

  _changeCommentInfo(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  _resetState() {
    this.setState({
      comment: ``,
      rating: 0
    });
  }

  render() {
    let buttonDisabledStatus = true;
    const {commentPost, offerId} = this.props;
    const {comment, rating} = this.state;
    if (comment.length > 49 && comment.length <= 300 && rating > 0) {
      buttonDisabledStatus = false;
    }

    return (
      <form className="reviews__form form" action="#" method="post"
        onSubmit={(evt) => {
          evt.preventDefault();
          commentPost(this.state, offerId);
          this._resetState();
          evt.target.reset();
        }}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio"
            onChange={this._changeCommentInfo}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio"
            onChange={this._changeCommentInfo}

          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio"

            onChange={this._changeCommentInfo}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio"
            onChange={this._changeCommentInfo}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio"
            onChange={this._changeCommentInfo}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="comment" name="comment"
          placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``}
          onChange={this._changeCommentInfo}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={buttonDisabledStatus}>Submit</button>
        </div>
      </form>
    );
  }
}

ReviewsForm.propTypes = {
  commentPost: PropTypes.func,
  offerId: PropTypes.number
};

// const mapStateToProps = (state) => ({
//   // userInfo: getUser(state)
// });

const mapDispatchToProps = (dispatch) => ({

  commentPost(commentInfo, offerId) {
    dispatch(
        OperationData.commentPost(commentInfo, offerId)
    );
  }
});

export {ReviewsForm};
export default connect(null, mapDispatchToProps)(ReviewsForm);

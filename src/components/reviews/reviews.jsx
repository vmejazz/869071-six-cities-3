import React from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";

const Reviews = (props) => {
  const {reviews = []} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList
        reviews={reviews}
      />
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input name="rating" className="form__rating-input visually-hidden" id="5-stars" type="radio" defaultValue={5} />
          <label title="perfect" className="reviews__rating-label form__rating-label" htmlFor="5-stars">
            <svg xmlns="http://www.w3.org/2000/svg" className="form__star-image" width={37} height={33}>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-star" />
            </svg>
          </label>
          <input name="rating" className="form__rating-input visually-hidden" id="4-stars" type="radio" defaultValue={4} />
          <label title="good" className="reviews__rating-label form__rating-label" htmlFor="4-stars">
            <svg xmlns="http://www.w3.org/2000/svg" className="form__star-image" width={37} height={33}>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-star" />
            </svg>
          </label>
          <input name="rating" className="form__rating-input visually-hidden" id="3-stars" type="radio" defaultValue={3} />
          <label title="not bad" className="reviews__rating-label form__rating-label" htmlFor="3-stars">
            <svg xmlns="http://www.w3.org/2000/svg" className="form__star-image" width={37} height={33}>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-star" />
            </svg>
          </label>
          <input name="rating" className="form__rating-input visually-hidden" id="2-stars" type="radio" defaultValue={2} />
          <label title="badly" className="reviews__rating-label form__rating-label" htmlFor="2-stars">
            <svg xmlns="http://www.w3.org/2000/svg" className="form__star-image" width={37} height={33}>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-star" />
            </svg>
          </label>
          <input name="rating" className="form__rating-input visually-hidden" id="1-star" type="radio" defaultValue={1} />
          <label title="terribly" className="reviews__rating-label form__rating-label" htmlFor="1-star">
            <svg xmlns="http://www.w3.org/2000/svg" className="form__star-image" width={37} height={33}>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea name="review" className="reviews__textarea form__textarea" id="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button disabled className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    srcAvatar: PropTypes.string,
    name: PropTypes.string,
    rate: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string
  }))
};

export default Reviews;

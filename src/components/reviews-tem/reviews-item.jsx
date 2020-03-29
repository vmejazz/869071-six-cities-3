import React from "react";
import PropTypes from "prop-types";

const ReviewsItem = (props) => {
  const {review} = props;
  const {srcAvatar, name, rate, text, date} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img width={54} height={54} className="reviews__avatar user__avatar" alt="Reviews avatar" src={srcAvatar} />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rate <= 4 ? rate * 20 : 100}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    srcAvatar: PropTypes.string,
    name: PropTypes.string,
    rate: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string
  })
};

export default ReviewsItem;

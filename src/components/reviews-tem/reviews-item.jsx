import React from "react";
import PropTypes from "prop-types";

const ReviewsItem = (props) => {
  const {review} = props;

  const {user = {}, rating, comment, date} = review;
  const {avatar_url: avatarUrl, name} = user;

  const dateOptions = {
    month: `long`,
    year: `numeric`,
  };
  let userDate = new Date(date).toLocaleDateString(`en-US`, dateOptions);

  if (Object.keys(review).length < 1) {
    return (
      <p>Проверка отзывов ...</p>
    );
  } else {

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img width={54} height={54} className="reviews__avatar user__avatar" alt="Reviews avatar" src={avatarUrl} />
          </div>
          <span className="reviews__user-name">
            {name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${rating <= 4 ? rating * 20 : 100}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">{userDate}</time>
        </div>
      </li>
    );
  }
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

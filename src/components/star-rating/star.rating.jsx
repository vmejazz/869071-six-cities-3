import React from "react";

const StarRating = (props) => {
  const {changeCommentInfo, number} = props;

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={number}
        id={`${number}-stars`}
        type="radio"
        onChange={changeCommentInfo}
      />
      <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>

  );
};

export default StarRating;

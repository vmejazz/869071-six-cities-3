import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-tem/reviews-item.jsx";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((item, index) => {
        return (
          <ReviewsItem
            review={item}
            key={item + index}
          />
        );
      })}
    </ul>

  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    srcAvatar: PropTypes.string,
    name: PropTypes.string,
    rate: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string
  }))
};

export default ReviewsList;

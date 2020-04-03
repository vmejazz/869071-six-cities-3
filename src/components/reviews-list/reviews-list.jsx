import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-tem/reviews-item.jsx";
import {connect} from "react-redux";
import {getComments} from "../../reducer/offer/selectors.js";
import {Operation} from "../../reducer/data/data.js";
import {getCommentPostStatus} from "../../reducer/data/selectors.js";
import {ActionCreator} from "../../reducer/data/data.js";
import ErrorModal from "../error-modal/error-modal.jsx";
class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getReviews, offerId} = this.props;
    getReviews(offerId);
  }

  render() {
    let {reviews, commentPostError, closeModal} = this.props;

    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
        {
          commentPostError
            ? <ErrorModal closeModal={closeModal}/>
            : null
        }
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
      </React.Fragment>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    srcAvatar: PropTypes.string,
    name: PropTypes.string,
    rate: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string,
  })),
  getReviews: PropTypes.func,
  offerId: PropTypes.number,
  commentPostError: PropTypes.bool,
  closeModal: PropTypes.func
};

ReviewsList.defaultProps = {
  reviews: []
};

const mapStateToProps = (state) => ({
  reviews: getComments(state),
  commentPostError: getCommentPostStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(offerId) {
    dispatch(
        Operation.getReviews(offerId)
    );
  },
  loadFavorites() {
    dispatch(
        Operation.loadFavorites()
    );
  },
  closeModal() {
    dispatch(
        ActionCreator.setPostError(false)
    );
  }
});

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);


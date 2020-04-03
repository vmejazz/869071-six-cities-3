import React, {PureComponent} from "react";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: 0,
        buttonStatus: true
      };

      this._changeCommentInfo = this._changeCommentInfo.bind(this);
      this._resetState = this._resetReviewForm.bind(this);
      this._setStatusButton = this._setStatusButton.bind(this);
      this._checkStatus = this._checkStatus.bind(this);
    }

    _setStatusButton(status) {
      this.setState({
        buttonStatus: status
      });
    }

    _checkStatus() {
      const {comment, rating} = this.state;
      if (comment.length > 49 && comment.length <= 300 && rating > 0) {
        this._setStatusButton(false);
      } else {
        this._setStatusButton(true);
      }
    }

    _changeCommentInfo(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }

    _resetReviewForm() {
      this.setState({
        comment: ``,
        rating: 0,
        buttonStatus: true
      });
    }

    componentDidUpdate() {
      this._checkStatus();
    }

    render() {
      const {comment, rating, buttonStatus} = this.state;

      return (
        <Component
          {...this.props}
          review={{comment, rating}}
          buttonStatus={buttonStatus}
          changeCommentInfo={this._changeCommentInfo}
          resetReviewForm={this._resetState}
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ApartmentList from "../apartment-list/apartment-list.jsx";
import {Operation} from "../../reducer/data/data.js";
import {getOffersNearby} from "../selectors.js";

class OffersNearby extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadNearby, activeOfferId} = this.props;

    loadNearby(activeOfferId);
  }

  // componentWillReceiveProps() {
  //   const {loadNearby, activeOfferId} = this.props;

  //   loadNearby(activeOfferId);

  // }

  componentWillReceiveProps(nextProps) {
    const {loadNearby, activeOfferId: nextId} = nextProps;
    const {activeOfferId: oldID} = this.props;

    if (oldID !== nextId) {
      loadNearby(nextId);
    }
  }


  render() {
    const {offersNearby = []} = this.props;

    return (
      <ApartmentList
        offersShow={offersNearby}
      />
    );
  }
}

OffersNearby.propTypes = {
  loadNearby: PropTypes.func,
  activeOfferId: PropTypes.string.isRequired,
  offersNearby: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  offersNearby: getOffersNearby(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadNearby(offerId) {
    dispatch(
        Operation.loadNearby(offerId)
    );
  },
});

export {OffersNearby};
export default connect(mapStateToProps, mapDispatchToProps)(OffersNearby);

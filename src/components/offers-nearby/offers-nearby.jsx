import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ApartmentList from "../apartment-list/apartment-list.jsx";
import {Operation} from "../../reducer/data/data.js";
import {getOffersNearby} from "../../reducer/data/selectors.js";
class OffersNearby extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadNearby, activeOfferId} = this.props;

    loadNearby(activeOfferId);
  }

  componentDidUpdate(nextProps) {
    const {loadNearby, activeOfferId: nextId} = nextProps;
    const {activeOfferId: oldId} = this.props;

    if (oldId !== nextId) {
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

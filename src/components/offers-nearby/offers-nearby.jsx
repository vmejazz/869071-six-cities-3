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
      loadNearby(oldId);
      window.scrollTo(0, 0);
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
  offersNearby: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    srcImg: PropTypes.string,
    imageURLs: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    premium: PropTypes.bool,
    type: PropTypes.string,
    rate: PropTypes.number,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    apartmentDetails: PropTypes.arrayOf(PropTypes.string),
    ownerInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool,
      srcAvatar: PropTypes.string
    }),
    positions: PropTypes.arrayOf(PropTypes.number).isRequired
  })),
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

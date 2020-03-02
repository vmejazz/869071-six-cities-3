import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ApartmentCard from "../apartment-card/apartment-card.jsx";

const ApartmentListClassMap = {
  MAIN_VIEW: `cities__places-list places__list tabs__content`,
  DETAIL_VIEW: `near-places__list places__list`
};
class ApartmentList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: -1
    };

    this._setActiveCard = this._setActiveCard.bind(this);
  }

  _setActiveCard(id) {
    this.setState({
      activeCardId: id
    });
  }

  render() {
    const {offersShow, onApartmentCardClick, onCardHover, detailView} = this.props;
    const apartmentListClass = detailView ? ApartmentListClassMap.DETAIL_VIEW : ApartmentListClassMap.MAIN_VIEW;

    return (
      <div className={apartmentListClass}>
        {offersShow.map((item) => {
          return (
            <ApartmentCard
              key={item.id}
              placeOffer={item}
              onApartmentCardClick={onApartmentCardClick}
              onCardHover={onCardHover}
              detailView={detailView}
            />
          );
        })}
      </div>
    );
  }
}

ApartmentList.propTypes = {
  offersShow: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    srcImg: PropTypes.string,
    srcGallery: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    premium: PropTypes.bool,
    type: PropTypes.string,
    rate: PropTypes.number,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    apartmentStuff: PropTypes.arrayOf(PropTypes.string),
    ownerInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool,
      srcAvatar: PropTypes.string
    }),
    position: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  onApartmentCardClick: PropTypes.func,
  onCardHover: PropTypes.func,
  detailView: PropTypes.bool
};

export default ApartmentList;



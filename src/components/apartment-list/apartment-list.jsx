import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ApartmentCard from "../apartment-card/apartment-card.jsx";

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
    const {offersShow, onApartmentCardClick, setHoverCardId} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersShow.map((item) => {
          return (
            <ApartmentCard
              key={item.id}
              placeOffer={item}
              onApartmentCardClick={onApartmentCardClick}
              onMouseHover={setHoverCardId}
            />
          );
        })}
      </div>
    );
  }
}

ApartmentList.propTypes = {
  offersShow: PropTypes.arrayOf(PropTypes.object).isRequired,
  onApartmentCardClick: PropTypes.func,
  setHoverCardId: PropTypes.number
};

export default ApartmentList;



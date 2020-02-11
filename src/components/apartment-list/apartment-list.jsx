import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ApartmentCard from "../apartment-card/apartment-card.jsx";

class ApartmentList extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {offersArray, onCityTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersArray.map((item) => {
          return (
            <ApartmentCard
              key={item.id}
              placeOffer={item}
              onCityTitleClick={onCityTitleClick}
            />
          );
        })}
      </div>
    );
  }
}

ApartmentList.propTypes = {
  offersArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCityTitleClick: PropTypes.func
};

export default ApartmentList;



import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ZOOM = 12;
class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers, cityes} = this.props;
    const myMap = this.myMap = leaflet.map(`mapId`, {
      zoomControl: false,
      marker: true
    });
    const firstCity = offers[0].city;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 45]
    });

    myMap.setView(cityes[firstCity], ZOOM);

    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
      .addTo(myMap);

    offers.map((item) => {
      leaflet
          .marker(item.position, {icon})
          .addTo(myMap);
    });
  }

  componentDidUpdate() {
    const {activeCity, cityes, offers} = this.props;
    const activeCityPosition = cityes[activeCity];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 45]
    });

    this.myMap.flyTo(activeCityPosition, ZOOM);

    offers.map((item) => {
      leaflet
          .marker(item.position, {icon})
          .addTo(this.myMap);
    });
  }

  componentWillUnmount() {
    this.myMap.remove();
  }

  render() {
    return (
      <section className="cities__map map" id="mapId"></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
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
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    city: PropTypes.string.isRequired
  })).isRequired,
  cityes: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
  activeCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity
});

export {Map};
export default connect(mapStateToProps)(Map);

import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

const cityes = {
  AMSTERDAM: [52.38333, 4.9],
  PARIS: [48.856663, 2.351556],
  COLOGNE: [50.930779, 6.938399],
  BRUSSELS: [50.851309, 4.351718],
  HAMBURG: [53.552645, 9.966287],
  DUSSELDORF: [51.230569, 6.787428]
};

const ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapElement = document.getElementById(`mapId`);
    if (mapElement) {
      const {offers} = this.props;
      const myMap = leaflet.map(`mapId`, {
        center: cityes.AMSTERDAM,
        zoom: ZOOM,
        zoomControl: false,
        marker: true
      });

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 45]
      });

      myMap.setView(cityes.AMSTERDAM, ZOOM);

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

    return null;
  }

  render() {
    return (
      <section className="cities__map map" id="mapId"></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    porition: PropTypes.array
  })).isRequired
};

export default Map;

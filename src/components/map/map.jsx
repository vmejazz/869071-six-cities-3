import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

const ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapElement = document.getElementById(`mapId`);
    if (mapElement) {
      const {offers, cityes} = this.props;
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
    position: PropTypes.array
  })).isRequired,
  cityes: PropTypes.object.isRequired
};

export default Map;

import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ZOOM = 12;
const MapClassList = {
  MAIN_VIEW: `cities__map map`,
  DETAIL_VIEW: `property__map map`
};
class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.icons = {
      iconBlue: leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 45]
      }),
      iconYellow: leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 45]
      })
    };

    this.layer = [];
  }

  componentDidMount() {
    const {offersShow, cityes} = this.props;
    const {iconBlue} = this.icons;
    const myMap = this.myMap = leaflet.map(`mapId`, {
      zoomControl: false,
      marker: true
    });
    const firstCity = offersShow[0].city;

    myMap.setView(cityes[firstCity], ZOOM);

    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
      .addTo(myMap);

    offersShow.map((item) => {
      this.layer.push(
          leaflet
          .marker(item.position, {icon: iconBlue})
          .addTo(myMap)
      );
    });
  }

  componentDidUpdate() {
    const {activeCity, cityes, offersShow, hoverCardId} = this.props;
    const {iconBlue, iconYellow} = this.icons;
    const activeCityPosition = cityes[activeCity];

    this.myMap.flyTo(activeCityPosition, ZOOM);
    this.layer.forEach((item) => {
      item.remove();
    });
    this.layer.length = 0;

    offersShow.map((item) => {
      this.layer.push(
          leaflet
        .marker(item.position, {icon: iconBlue})
        .addTo(this.myMap)
      );
    });

    const offerHovered = offersShow.find((item) => {
      return item.id === hoverCardId;
    });
    if (offerHovered) {
      this.layer.push(
          leaflet.marker(offerHovered.position, {icon: iconYellow}).addTo(this.myMap)
      );
    }
  }

  componentWillUnmount() {
    this.myMap.remove();
  }

  render() {
    const {mapDetail} = this.props;
    const mapClass = mapDetail ? MapClassList.DETAIL_VIEW : MapClassList.MAIN_VIEW;

    return (
      <section className={mapClass} id="mapId"></section>
    );
  }
}

Map.propTypes = {
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
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    city: PropTypes.string.isRequired
  })).isRequired,
  cityes: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
  activeCity: PropTypes.string.isRequired,
  hoverCardId: PropTypes.number,
  mapDetail: PropTypes.bool
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity
});

export {Map};
export default connect(mapStateToProps)(Map);

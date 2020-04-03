import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCityes, gethoverCardId} from "../../reducer/data/selectors.js";
class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.icons = {
      iconBlue: leaflet.icon({
        iconUrl: `/img/pin.svg`,
        iconSize: [30, 45]
      }),
      iconYellow: leaflet.icon({
        iconUrl: `/img/pin-active.svg`,
        iconSize: [30, 45]
      })
    };

    this.layer = [];
  }

  componentDidMount() {
    const {offersShow = [], cityes, activeCity} = this.props;
    const {iconBlue} = this.icons;
    const myMap = this.myMap = leaflet.map(`mapId`, {
      zoomControl: false,
      marker: true
    });
    const firstCity = cityes[activeCity];
    const mapArgument = [firstCity.latitude, firstCity.longitude];

    myMap.setView(mapArgument, firstCity.zoom);

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
    const {activeCity, cityes, offersShow, isDetail, isDetailHoverId} = this.props;
    let {hoverCardId} = this.props;
    const {iconBlue, iconYellow} = this.icons;
    const activeCityPosition = cityes[activeCity];

    let mapArgument = [activeCityPosition.latitude, activeCityPosition.longitude];

    this.myMap.flyTo(mapArgument, activeCityPosition.zoom);
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

    hoverCardId = isDetail ? isDetailHoverId : hoverCardId;

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
    const {isDetail} = this.props;

    let mapClassName = isDetail ? `property__map map` : `cities__map map`;
    let mapStyle = isDetail ? {width: `1145px`, marginLeft: `auto`, marginRight: `auto`, display: `block`} : {};

    return (
      <section className={mapClassName} style={mapStyle} id="mapId"></section>
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
  })),
  cityes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  ]),
  activeCity: PropTypes.string.isRequired,
  hoverCardId: PropTypes.number,
  isDetail: PropTypes.bool,
  isDetailHoverId: PropTypes.number
};

const mapStateToProps = (state) => ({
  cityes: getCityes(state),
  hoverCardId: gethoverCardId(state)
});

export {Map};
export default connect(mapStateToProps)(Map);

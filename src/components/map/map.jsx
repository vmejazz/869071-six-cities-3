import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {connect} from "react-redux";
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
    // console.log( offersShow, typeof(cityes))

    const firstCity = cityes[Object.keys(cityes)[0]];
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
    const {activeCity, cityes, offersShow, hoverCardId} = this.props;
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
    return (
      <section className="cities__map map" id="mapId"></section>
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
  cityes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  ]),
  activeCity: PropTypes.string.isRequired,
  hoverCardId: PropTypes.number
};

// Map.defaultProps = {
//   activeCity: `Paris`
// }

const mapStateToProps = (state) => ({
  activeCity: state.DATA.activeCity
});

export {Map};
export default connect(mapStateToProps)(Map);

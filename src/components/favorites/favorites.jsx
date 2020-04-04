import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data.js";
import {getOffersFavorite, getCityesFavorite} from "../../reducer/data/selectors.js";
import FavoritesList from "../favorites-list/favorites-list.jsx";
import PropTypes from "prop-types";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";
import PageHeader from "../page-header/page-header.jsx";
class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavorites} = this.props;
    loadFavorites();
  }

  render() {
    const {offersFavorite, cityesFavorite} = this.props;

    let isEmptyList = offersFavorite.length < 1;

    return (
      <div className="page">
        <PageHeader />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            {isEmptyList
              ? <FavoritesEmpty />
              : <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList
                  offersFavorite={offersFavorite}
                  cityesFavorite={Object.keys(cityesFavorite)}
                />
              </section>
            }
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </a>
        </footer>
      </div>
    );
  }
}

Favorites.propTypes = {
  offersFavorite: PropTypes.arrayOf(PropTypes.shape({
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
  cityesFavorite: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  ]),
  loadFavorites: PropTypes.func
};

const mapStateToProps = (state) => ({
  offersFavorite: getOffersFavorite(state),
  cityesFavorite: getCityesFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites() {
    dispatch(
        Operation.loadFavorites()
    );
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


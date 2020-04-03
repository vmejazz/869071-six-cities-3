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
  offersFavorite: PropTypes.array,
  cityesFavorite: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
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


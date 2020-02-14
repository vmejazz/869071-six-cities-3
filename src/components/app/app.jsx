import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import ApartmentDetailInfo from "../apartment-detail-info/apartment-detail-info.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeId: -1
    };

    this._handleApartmentCardClick = this._handleApartmentCardClick.bind(this);
  }

  _handleApartmentCardClick(id) {
    this.setState({
      activeId: id
    });
  }

  _renderApp() {
    const {offerPlacesCount, offersArray} = this.props;
    const {activeId} = this.state;

    if (activeId < 0) {
      return (
        <Main
          offerPlacesCount={offerPlacesCount}
          offersArray={offersArray}
          onApartmentCardClick={this._handleApartmentCardClick}
        />
      );
    }

    return (
      <ApartmentDetailInfo offer={offersArray[activeId - 1]} />
    );

  }

  render() {
    const offer = this.props.offersArray[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route path="/offer">
            <ApartmentDetailInfo offer={offer} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offerPlacesCount: PropTypes.number.isRequired,
  offersArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    srcImg: PropTypes.string
  })).isRequired,
  onApartmentCardClick: PropTypes.func
};

export default App;

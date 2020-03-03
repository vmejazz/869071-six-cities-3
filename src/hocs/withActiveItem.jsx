import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      const {} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          setActiveItem={this._setActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
class SortOptions extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOption: undefined,
      optionList: [
        `Popular`,
        `Price: low to high`,
        `Price: high to low`,
        `Top rated first`
      ]
    };

    this._clickOptionButtonHandler = this._clickOptionButtonHandler.bind(this);
  }

  _clickOptionButtonHandler(activeOption) {
    this.setState({
      activeOption
    });
  }

  render() {
    const {onSortOptionsClick} = this.props;
    const {optionList} = this.state;
    const {activeOption = optionList[0]} = this.state;

    return (
      <React.Fragment>
        <span tabIndex={0} className="places__sorting-type">
          {activeOption}
          <svg xmlns="http://www.w3.org/2000/svg" className="places__sorting-arrow" width={7} height={4}>
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          {optionList.map((item, index) => {
            return (
              <li
                tabIndex={0}
                className="places__option"
                key={item + index}
                onClick={() => {
                  this._clickOptionButtonHandler(`${item}`);
                  onSortOptionsClick(`${item}`);
                }
                }
              >
                {item}
              </li>
            );
          })}
          {/* <li tabIndex={0} className="places__option places__option--active">Popular</li> */}
        </ul>
        {/* <select className="places__sorting-type" id="places-sorting">
        <option className="places__option" value="popular" selected>Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select> */}
      </React.Fragment>
    );
  }
}

SortOptions.propTypes = {
  onSortOptionsClick: PropTypes.func
};

export default SortOptions;

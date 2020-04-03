import React from "react";
import PropTypes from "prop-types";

const SortOptions = (props) => {
  const optionList = [
    `Popular`,
    `Price: low to high`,
    `Price: high to low`,
    `Top rated first`
  ];
  const {activeItem, setActiveItem, onSortOptionsClick} = props;

  return (
    <React.Fragment>
      <span tabIndex={0} className="places__sorting-type">
        {activeItem}
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
                setActiveItem(`${item}`);
                onSortOptionsClick(`${item}`);
              }
              }
            >
              {item}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

SortOptions.propTypes = {
  onSortOptionsClick: PropTypes.func,
  setActiveItem: PropTypes.func,
  activeItem: PropTypes.string
};

export default SortOptions;

import React from "react";

const EmptyOffers = () => {
  return (
    <React.Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment in Dusseldorf</p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EmptyOffers;

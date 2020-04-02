import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getActiveCity = (state) => {
  return state.DATA.activeCity;
};

export const getCityes = (state) => {
  return state.DATA.cityes;
};

export const getUser = (state) => {
  return state.USER;
};

export const getActiveOfferId = (state) => {
  return state.DATA.activeOfferId;
};

export const getOffersFavorite = (state) => {
  return state.DATA.offersFavorite;
};

export const getCityesFavorite = (state) => {
  return state.DATA.cityesFavorite;
};

export const getOffersNearby = (state) => {
  return state.DATA.offersNearby;
};

export const gethoverCardId = (state) => {
  return state.DATA.hoverCardId;
};

export const getAutorisationStatus = (state) => {
  return state.USER.authorizationStatus;
};

export const getCheckedStatus = (state) => {
  return state.USER.isCheckedStatus;
};

export const getOpenOffer = (state, id) => {
  return state.DATA.offers.find((item) => item.id === Number(id.activeOfferId));
};

// export const getOffersShow = createSelector(
//     getOffers,
//     getActiveCity,
//     (offers, city) => {
//       return console.log(offers, city);
//     }
// );

export const getOffersShow = createSelector(
    getOffers,
    getActiveCity,
    (offers, activeCity) => {
      return offers.filter((item) => {
        return item.city === activeCity;
      });
    }
);

export const getComments = (state) => {
  const MAX_REVIEWS = 10;

  let {reviews} = state.OFFER;
  reviews.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  reviews.splice(MAX_REVIEWS);

  return reviews;
};


// export const getPopularOffer = createSelector(
//     getOffersShow,
//     (offersShow) => {
//       return offersShow.slice();
//     }
// );

// export const getLowToHight = createSelector(
//     getOffersShow,
//     (offersShow) => {
//       return offersShow.slice()
//                         .sort((a, b) => a.price - b.price);
//     }
// );

import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.OFFER;

export const getComments = (state) => {
  const MAX_REVIEWS = 10;

  let {reviews} = state[NAME_SPACE];
  reviews.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  reviews.splice(MAX_REVIEWS);

  return reviews;
};

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

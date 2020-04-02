export const getOpenOffer = (offers, id) => {
  return offers.find((item) => item.id === Number(id));
};


// import {extend} from "../utils.js";
// import ParseData from "../data/parse-data.js";


// const initialState = {
//   activeOfferId: -1,
//   hoverCardId: -1
// };

// const ActionType = {
//   GET_OFFERS: `GET_OFFERS`,
//   PARSE_CITYES: `PARSE_CITYES`,
//   // GET_OFFERS_SHOW: `GET_OFFERS_SHOW`
// };

// const ActionCreator = {
//   getOffers: (city) => ({
//     type: ActionType.GET_OFFERS,
//     payload: city
//   }),
//   parseCityes: (offers) => ({
//     type: ActionType.PARSE_CITYES,
//     payload: offers
//   }),
//   // getOffersShow: (offers) => ({
//   //   type: ActionType.GET_OFFERS_SHOW,
//   //   payload: offers
//   // })
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case ActionType.GET_OFFERS:
//     //   return extend(state, {
//     //     activeCity: action.payload,
//     //     offersShow: offers.filter((item) =>{
//     //       return action.payload === item.city;
//     //     })
//     //   });

//     case ActionType.PARSE_CITYES:
//       const ParseDataModal = new ParseData(action.payload);
//       const cityes = ParseDataModal._toCityes();
//       return extend(state, {
//         cityes
//       });
//     default:
//       return state;
//   }
// };

// export {reducer, ActionType, ActionCreator};

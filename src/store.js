import { combineReducers, createStore } from "redux";
const intialState = {
  balance: 2000,
  fullName: "raju",
  mobile: 7702834005,
};

function accountReducer(state = intialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "mobileUpdate":
      return { ...state, mobile: action.payload };
    case "nameUpdate":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}
function transactionReducer(state = [], action) {
  switch (action.type) {
    case "AddTransaction":
      return [
        ...state,
        {
            id:action.payload.id,
          amount: action.payload.amount,
          type: action.payload.type,
          date: action.payload.date,
        },
      ];
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer,
});
const store = createStore(rootReducer);
export default store;

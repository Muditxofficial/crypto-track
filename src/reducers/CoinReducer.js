const initState = {
  coinData: [],
  initCoin: [],
};

const coinReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        coinData: action.payload.coinData,
      };
    case "ADD_COIN":
      return {
        ...state,
        initCoin: action.payload.initCoin,
      };
    default:
      return {
        ...state,
      };
  }
};

export default coinReducer;

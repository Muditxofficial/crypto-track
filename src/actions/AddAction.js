import Coingecko from "../api/Coingecko";

export const loadCoin = (id) => async (dispatch) => {
  const res = await Coingecko.get(`/coins/${id}`);
  dispatch({
    type: "ADD_COIN",
    payload: {
      initCoin: res.data,
    },
  });
};

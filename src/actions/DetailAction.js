import Coingecko from "../api/Coingecko";

export const loadDetail = () => async (dispatch) => {
  const res = await Coingecko.get("/coins/markets/", {
    params: {
      vs_currency: "usd",
      per_page: 5,
    },
  });
  dispatch({
    type: "FETCH_DATA",
    payload: {
      coinData: res.data,
    },
  });
};

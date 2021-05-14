import Coingecko from "../api/Coingecko";

export const loadMainDetail = (id) => async (dispatch) => {
  const [day, week, year, detail] = await Promise.all([
    Coingecko.get(`/coins/${id}/market_chart/`, {
      params: {
        vs_currency: "usd",
        days: "1",
      },
    }),
    Coingecko.get(`/coins/${id}/market_chart/`, {
      params: {
        vs_currency: "usd",
        days: "7",
      },
    }),
    Coingecko.get(`/coins/${id}/market_chart/`, {
      params: {
        vs_currency: "usd",
        days: "365",
      },
    }),
    Coingecko.get("/coins/markets/", {
      params: {
        vs_currency: "usd",
        ids: id,
      },
    }),
  ]);
  dispatch({
    type: "FETCH_COIN",
    payload: {
      day: day.data.prices,
      week: week.data.prices,
      year: year.data.prices,
      detail: detail.data[0],
    },
  });
};

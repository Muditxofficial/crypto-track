const initState = {
  day: [],
  week: [],
  year: [],
  detail: [],
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case "FETCH_COIN":
      return {
        ...state,
        day: action.payload.day,
        week: action.payload.week,
        year: action.payload.year,
        detail: action.payload.detail,
      };
  }
};
export default dataReducer;

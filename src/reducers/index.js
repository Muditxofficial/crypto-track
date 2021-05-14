import { combineReducers } from "redux";
import coinReducer from "./CoinReducer";
import dataReducer from "./DataReducer";

const rootReducer = combineReducers({
  coin: coinReducer,
  data: dataReducer,
});

export default rootReducer;

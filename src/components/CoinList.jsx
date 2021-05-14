import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDetail } from "../actions/DetailAction";
import AddCoin from "./AddCoin";

import Coin from "./Coin";

const CoinList = () => {
  const dispatch = useDispatch();
  //const loadDetailHandler = () => {
  //dispatch(loadDetail());
  //};
  useEffect(() => {
    dispatch(loadDetail());
  }, [dispatch]);

  const coins = useSelector((state) => state.coin.coinData);

  return (
    <>
      {/*<button onClick={loadDetailHandler}>Show Coins</button>*/}
      <ul>
        <h1>Popular Currencies</h1>
        {coins.map((x) => (
          <Coin coin={x} key={x.id} />
        ))}
      </ul>
      <AddCoin />
    </>
  );
};

export default CoinList;

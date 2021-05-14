import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadCoin } from "../actions/AddAction";
import Coin from "./Coin";
const AddCoin = () => {
  const [coinAdd, setCoinAdd] = useState("");
  console.log(coinAdd);
  const textHandler = (e) => {
    setCoinAdd(e.target.value);
  };
  const loader = () => {};
  return (
    <>
      <input onChange={textHandler} value={coinAdd} />
      <Link to={`/coins/${coinAdd}`}>
        <button>Search</button>
      </Link>
    </>
  );
};

export default AddCoin;

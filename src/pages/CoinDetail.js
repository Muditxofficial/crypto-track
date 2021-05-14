import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadMainDetail } from "../actions/MainDetail";

import Copy from "../components/copy";

import HistoryChart from "../components/HistoryChart";

const CoinDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMainDetail(id));
  }, [id, dispatch]);
  const data = useSelector((state) => state.data);
  return (
    <div>
      <HistoryChart data={data} />
      <Copy data={data} />
    </div>
  );
};

export default CoinDetail;

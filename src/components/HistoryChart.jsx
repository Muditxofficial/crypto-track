import React from "react";
const HistoryChart = ({ data }) => {
  return (
    <div>
      <div className="bg-white mt-3 p-2 rounded border row">
        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">Market Cap</span>
            <span>{data.detail.market_cap}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">Total Supply</span>
            <span>{data.detail.total_supply}</span>
          </div>
        </div>

        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">Volume(24H)</span>
            <span>{data.detail.total_volume}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">high 24h</span>
            <span>{data.detail.high_24h}</span>
          </div>
        </div>

        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">
              Circulating Supply
            </span>
            <span>{data.detail.circulating_supply}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">low 24h</span>
            <span>{data.detail.low_24h}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryChart;

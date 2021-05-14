import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const Copy = ({ data }) => {
  const [timeFormat, setTimeFormat] = useState("24h");
  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return data.day;
      case "7d":
        return data.week;
      case "1y":
        return data.year;
      default:
        return data.day;
    }
  };
  console.log(data.day);
  const timeAxes = () => {
    if (timeFormat === "24h") {
      return data.day;
    } else if (timeFormat === "7d") {
      return data.week;
    } else {
      return data.year;
    }
  };

  const info = {
    labels: timeAxes(),
    datasets: [
      {
        label: `${data.detail.name}`,
        backgroundColor: "rgba(174, 305, 194, 0.5)",
        borderColor: "rgba(174, 305, 194, 0.4",
        pointRadius: 0,
        data: determineTimeFormat(),
      },
    ],
    options: {
      lineHeightAnnotation: {
        always: true,
        hover: false,
        lineWeight: 1.5,
      },

      animation: {
        duration: 2000,
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            type: "time",
            distribution: "linear",
          },
        ],
      },
    },
  };
  return (
    <div>
      <Line data={info} />
      <div className="chart-button mt-1">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-secondary btn-sm"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-secondary btn-sm"
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default Copy;

import React from "react";
import style from "./Graph.module.css";

import { MdKeyboardArrowDown } from "react-icons/md";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];
const labels = ["Week1", "Week2", "Week3", "week4", "Week5", "Week6"];
const options = {
  Plugins: {
    legend: {
      position: "bottom",
    },
  },
};
export default function Graph() {
  const data = {
    labels,
    datasets: [
      {
        label: "Guest",
        data: [320, 420, 510, 600, 480, 450],

        backgroundColor: "#fff",
        borderColor: "#E9A0A0",
        tension: 0.3,
      },
      {
        label: "User",

        data: [370, 420, 810, 400, 510, 750],

        backgroundColor: "#fff",
        borderColor: "#9BDD7C",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={style.table}>
      <p className={style.graphheading}>Activity </p>
      <p className={style.month}>
        May-June 2021 <MdKeyboardArrowDown className={style.arrow} />
      </p>
      <Line width={600} options={options} data={data}></Line>
    </div>
  );
}

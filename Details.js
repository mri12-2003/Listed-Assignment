import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import style from "./Details.module.css";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Details() {
  const data = {
    datasets: [
      {
        data: [14, 31, 55],
        backgroundColor: ["#FF6969", "#F7D060", "#B6E2A1"],
      },
    ],
  };
  const options = {};
  return (
    <>
      <div className={style.piechart}>
        <div className={style.pyleft}>
          <p className={style.piheading}>Top Products </p>
          <Pie data={data} options={options} className={style.pie}></Pie>
        </div>
        <div className={style.pyright}>
          <p> Basic fees</p>
          <p className={style.percent}>55%</p>
          <p> Custom Short Pants</p>
          <p className={style.percent}>31%</p>
          <p> Super Hoodies</p>
          <p className={style.percent}>14%</p>
        </div>
      </div>
    </>
  );
}

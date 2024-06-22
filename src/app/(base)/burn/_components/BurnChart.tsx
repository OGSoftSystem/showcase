"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BurnChart = () => {
  let num: number[] = [];
  for (let i = 1; i <= 3; i++) {
    num.push(i);

  }

  const data = {
    labels: num,
    datasets: [
      {
        label: "Burn Percentage",
        data: num,
        backgroundColor: ["#fff", "#eaa", "#aef"],
      },
    ],
  };
  const options = {
    cutout: "60%",
    plugin: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default BurnChart;

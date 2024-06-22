"use client";

import CountUp from "react-countup";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const AnimatedCount = ({ end }: { end: number }) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    // Fetch % and setValue
    setValue(end);
  }, [end]);

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-6 lg:space-x-10">
      <CountUp
        start={0}
        end={value}
        duration={2.75}
        separator=" "
        decimals={1}
        decimal="."
        className={`text-7xl font-bold text-center text-accent-foreground`}
        suffix=" %"
        //   prefix="EUR "
        // onEnd={() => console.log("Ended! 👏")}
        //   onStart={() => console.log("Started! 💨")}
      />

      <BurnChart end={end} />
    </div>
  );
};

const BurnChart = ({ end }: { end: number }) => {
  const totalBurnPercentage: number = 99;
  const currentBurnPercentage =
    (end / totalBurnPercentage) * totalBurnPercentage;
  const percentageLeft = totalBurnPercentage - currentBurnPercentage;

  const data = {
    labels: ["Burned", "Available"],
    datasets: [
      {
        label: "Burn Percentage",
        data: [currentBurnPercentage, percentageLeft],
        backgroundColor: ["#e31f1f", "#1967FE"],
      },
    ],
  };
  const options = {
    cutout: "70%",
    plugin: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="size-60 lg:size-96">
      <Doughnut data={data} options={options} className="mt-10 md:mt-0" />
    </div>
  );
};

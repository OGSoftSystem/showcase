"use client";

import { useState } from "react";

const moments = ["5m", "1h", "6", "24h", "7d", "30d", "90d", "ATL"];
const DaysFilter = () => {
  const [selected, setSelected] = useState<string>();

  console.log(selected);

  return (
    <div className="flex space-x-4 rounded-full py-2 border-input border px-4">
      {moments.map((time) => {
        return (
          <span
            onClick={() => setSelected(time)}
            key={time}
            className="text-muted-foreground hover:text-ring font-semibold cursor-pointer duration-200 ease-in"
          >
            {time}
          </span>
        );
      })}
    </div>
  );
};

export default DaysFilter;

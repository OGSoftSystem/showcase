import React from "react";
import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div>
      <Loader2 className="size-4 animate-spin" />
    </div>
  );
};

export default Spinner;

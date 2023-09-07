import React, { useRef } from "react";
import { Chart } from "chart.js";

export const ChartZoom = (ref: any) => {
  // const chartRef = useRef<Chart | null>(null);

  const zoomIn = () => {
    ref?.current?.zoom(2);
  };

  const zoomOut = () => {
    ref?.current?.zoom(-2);
  };
  return (
    <div className="flex px-8 justify-end gap-4">
      <button
        className="border border-primary-500 rounded-full w-6 h-6 text-md"
        onClick={() => zoomIn()}
      >
        +
      </button>
      <button
        className="border border-primary-500 rounded-full w-6 text-md"
        onClick={() => zoomOut()}
      >
        -
      </button>
    </div>
  );
};

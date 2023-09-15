import React, { forwardRef } from "react";
import { IconPlus, IconMinus } from "@cs-user/components";

const ChartZoom = forwardRef((props: any, ref: any) => {
  const zoomIn = () => {
    console.log(ref);
    ref.current.zoom(2);
    // You can use ref?.current here for zooming if your ref has a 'zoom' method.
  };

  const zoomOut = () => {
    console.log(ref);
    ref.current.zoom(-2);

    // You can use ref?.current here for zooming if your ref has a 'zoom' method.
  };

  return (
    <div className="flex px-8 justify-end gap-4">
      <button
        className="border border-primary-500 rounded-full w-6 h-6 text-md flex justify-center items-center"
        onClick={() => zoomIn()}
      >
        <IconPlus color="#1B9984" />
      </button>
      <button
        className="border border-primary-500 rounded-full w-6 text-md flex justify-center items-center"
        onClick={() => zoomOut()}
      >
        <IconMinus color="#1B9984" />
      </button>
    </div>
  );
});

ChartZoom.displayName = "ChartZoom";

export default ChartZoom;

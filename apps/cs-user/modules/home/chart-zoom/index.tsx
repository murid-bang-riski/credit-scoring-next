import React, { forwardRef } from "react";

const ChartZoom = forwardRef((props: any, ref: any) => {
  const zoomIn = () => {
    console.log(ref);
    ref.current.zoom(3);
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
});

ChartZoom.displayName = "ChartZoom";

export default ChartZoom;

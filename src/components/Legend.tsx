import React from "react";
const Legend: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-full justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-start-cell"></div>
        <p>Start</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-end-cell"></div>
        <p>End</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-wall-cell"></div>
        <p>Wall</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-path-cell"></div>
        <p>Path</p>
      </div>
    </div>
  );
};
export default Legend;

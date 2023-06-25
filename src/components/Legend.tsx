import React from "react";
const Legend: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-center m-3">
      <div className="flex items-center justify-center gap-2">
        <div className="w-4 h-4 bg-yellow-500 rounded-full" />
        <p>Start</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded-full" />
          <p>End</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 bg-violet-500 rounded-full" />
          <p>Path</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full" />
          <p>User obstacle</p>
        </div>
      </div>
    </div>
  );
};
export default Legend;

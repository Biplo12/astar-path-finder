import React from "react";

interface IRunButton {
  runAStar: () => void;
}

const RunAlgorithmButton: React.FC<IRunButton> = ({
  runAStar,
}): JSX.Element => {
  return (
    <button className="col-span-12 bg-blue-500" onClick={() => runAStar()}>
      Run
    </button>
  );
};
export default RunAlgorithmButton;

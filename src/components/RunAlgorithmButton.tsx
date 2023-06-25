import React from "react";

interface IRunButton {
  runAStar: () => void;
  disableButtons: boolean;
}

const RunAlgorithmButton: React.FC<IRunButton> = ({
  runAStar,
  disableButtons,
}): JSX.Element => {
  return (
    <button
      className="col-span-12 bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={() => runAStar()}
      disabled={disableButtons}
    >
      Run
    </button>
  );
};
export default RunAlgorithmButton;

import React from "react";

const COLUNMS = 12;
const ROWS = 12;

interface IResetButton {
  initializeGrid: (col: number, row: number) => void;
  setPathCells: React.Dispatch<React.SetStateAction<number[][]>>;
  setPathNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  setDisableButtons: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetButton: React.FC<IResetButton> = ({
  initializeGrid,
  setPathCells,
  setPathNotFound,
  setDisableButtons,
}): JSX.Element => {
  const handleReset = () => {
    initializeGrid(COLUNMS, ROWS);
    setPathCells([]);
    setPathNotFound(false);
    setDisableButtons(false);
  };
  return (
    <button className="col-span-12 bg-blue-500" onClick={() => handleReset()}>
      Reset
    </button>
  );
};
export default ResetButton;

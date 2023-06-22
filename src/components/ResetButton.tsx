import React from "react";

const COLUNMS = 12;
const ROWS = 12;

interface IResetButton {
  initializeGrid: (col: number, row: number) => void;
  setPathCells: React.Dispatch<React.SetStateAction<number[][]>>;
  setPathNotFound: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetButton: React.FC<IResetButton> = ({
  initializeGrid,
  setPathCells,
  setPathNotFound,
}): JSX.Element => {
  const handleReset = () => {
    initializeGrid(COLUNMS, ROWS);
    setPathCells([]);
    setPathNotFound(false);
  };
  return (
    <button
      className="col-span-12 bg-blue-500 mt-2"
      onClick={() => handleReset()}
    >
      Reset
    </button>
  );
};
export default ResetButton;

import React from "react";

const COLUNMS = 12;
const ROWS = 12;

interface IResetButton {
  initializeGrid: (col: number, row: number) => void;
  setPathCells: React.Dispatch<React.SetStateAction<number[][]>>;
}

const ResetButton: React.FC<IResetButton> = ({
  initializeGrid,
  setPathCells,
}): JSX.Element => {
  const handleReset = () => {
    initializeGrid(COLUNMS, ROWS);
    setPathCells([]);
  };
  return (
    <button className="" onClick={handleReset}>
      <img src="/reroll.svg" alt="reset" className="w-12 h-12" />
    </button>
  );
};
export default ResetButton;

import React, { useState } from "react";
import useCellClick from "@/hooks/useCellClick";
import useCellHover from "@/hooks/useCellHover";

interface IGrid {
  grid: number[][];
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
  startCell: number[];
  endCell: number[];
  setPathNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  pathCells: number[][];
  setPathCells: React.Dispatch<React.SetStateAction<number[][]>>;
}

const Grid: React.FC<IGrid> = ({
  grid,
  setGrid,
  startCell,
  endCell,
  pathCells,
}): JSX.Element => {
  const [hoveredCell, setHoveredCell] = useState<number[]>([]);
  const [clickedCell, setClickedCell] = useState<number[]>([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const { handleCellHover } = useCellHover(
    grid,
    setGrid,
    startCell,
    endCell,
    clickedCell,
    isMouseDown,
    setHoveredCell,
    hoveredCell
  );

  const { handleCellClick } = useCellClick(
    grid,
    setGrid,
    startCell,
    endCell,
    setHoveredCell,
    setClickedCell,
    clickedCell
  );

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className="grid grid-cols-12"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {grid.map((row, i) =>
          row.map((col, j) => (
            <div
              key={`${i}-${j}`}
              className={`w-16 h-16 border border-red-500
            ${
              pathCells?.some((cell) => cell?.[0] === i && cell?.[1] === j)
                ? "bg-violet-500"
                : hoveredCell[0] === i && hoveredCell[1] === j
                ? "bg-green-500"
                : col === 3
                ? "bg-red-500"
                : col === 1
                ? "bg-green-500"
                : col === 2
                ? "bg-yellow-500"
                : "bg-gray-700"
            }`}
              onClick={() => handleCellClick(i, j)}
              onMouseEnter={() => handleCellHover(i, j)}
              onMouseLeave={() => {
                if (!isMouseDown) setHoveredCell([]);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Grid;

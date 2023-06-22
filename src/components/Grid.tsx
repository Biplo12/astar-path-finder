import React, { useState } from "react";
import useInitialGrid from "@/hooks/useInitialGrid";
import useCellClick from "@/hooks/useCellClick";
import useCellHover from "@/hooks/useCellHover";
import useRunAStar from "@/hooks/useRunAStar";

const COLUNMS = 12;
const ROWS = 12;

const Grid: React.FC = (): JSX.Element => {
  const [hoveredCell, setHoveredCell] = useState<number[]>([]);
  const [clickedCell, setClickedCell] = useState<number[]>([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const { grid, startCell, endCell, setGrid, initializeGrid } =
    useInitialGrid();

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

  const { runAStar, pathCells, setPathCells } = useRunAStar(
    startCell,
    endCell,
    grid
  );

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleReset = () => {
    initializeGrid(COLUNMS, ROWS);
    setPathCells([]);
  };

  return (
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
                ? "bg-yellow-500"
                : col === 1
                ? "bg-green-500"
                : col === 2
                ? "bg-red-500"
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
      <button className="col-span-12 bg-blue-500" onClick={() => runAStar()}>
        Run
      </button>
      <button
        className="col-span-12 bg-blue-500 mt-2"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </div>
  );
};

export default Grid;

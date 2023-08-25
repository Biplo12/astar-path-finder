import React, { useEffect, useState } from "react";
import useCellClick from "@/hooks/useCellClick";
import useCellHover from "@/hooks/useCellHover";

const START_CELL = 1;
const END_CELL = 2;
const PATH_CELL = 3;

interface IGrid {
  grid: number[][];
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
  startCell: number[];
  endCell: number[];
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

  const [squereWidth, setSquereWidth] = useState(3.5);
  const [squereHeight, setSquereHeight] = useState(3.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640 && window.innerWidth > 540) {
        setSquereWidth(2.5);
        setSquereHeight(2.5);
      } else if (window.innerWidth < 540 && window.innerWidth > 440) {
        setSquereWidth(2);
        setSquereHeight(2);
      } else if (window.innerWidth < 440) {
        setSquereWidth(1.5);
        setSquereHeight(1.5);
      } else {
        setSquereWidth(3.5);
        setSquereHeight(3.5);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              className={`border border-[#42DB1F] border-opacity-25 ${
                pathCells?.some((cell) => cell?.[0] === i && cell?.[1] === j)
                  ? "bg-path-cell"
                  : hoveredCell[0] === i && hoveredCell[1] === j
                  ? "bg-wall-cell"
                  : col === 3
                  ? "bg-end-cell"
                  : col === 1
                  ? "bg-wall-cell"
                  : col === 2
                  ? "bg-start-cell"
                  : "bg-background"
              }`}
              style={{
                width: `${squereWidth}rem`,
                height: `${squereHeight}rem`,
              }}
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

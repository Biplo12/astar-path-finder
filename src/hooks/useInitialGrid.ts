import { useEffect, useState } from "react";

const START_CELL = 2;
const END_CELL = 3;

const COLUNMS = 12;
const ROWS = 12;

const useInitialGrid = () => {
  const [startCell, setStartCell] = useState<number[]>([]);
  const [endCell, setEndCell] = useState<number[]>([]);
  const [grid, setGrid] = useState<Array<Array<number>>>([]);

  const initializeGrid = (cols: number, rows: number) => {
    const newGrid = [];
    for (let i = 0; i < cols; i++) {
      newGrid.push([]);
      for (let j = 0; j < rows; j++) {
        newGrid[i].push(0);
      }
    }
    const randomRowIndexStart = Math.floor(Math.random() * rows);
    const randomColIndexStart = Math.floor(Math.random() * rows);

    const randomRowIndexEnd = Math.floor(Math.random() * rows);
    const randomColIndexEnd = Math.floor(Math.random() * rows);

    if (
      Math.abs(randomRowIndexStart - randomRowIndexEnd) <= 1 &&
      Math.abs(randomColIndexStart - randomColIndexEnd) <= 1
    ) {
      initializeGrid(cols, rows);
      return;
    }

    setStartCell([randomRowIndexStart, randomColIndexStart]);
    setEndCell([randomRowIndexEnd, randomColIndexEnd]);
    newGrid[randomRowIndexStart][randomColIndexStart] = START_CELL;
    newGrid[randomRowIndexEnd][randomColIndexEnd] = END_CELL;
    setGrid(newGrid);
  };

  useEffect(() => {
    initializeGrid(COLUNMS, ROWS);
  }, [COLUNMS, ROWS]);

  return {
    grid,
    startCell,
    endCell,
    setGrid,
    initializeGrid,
    setStartCell,
    setEndCell,
  };
};

export default useInitialGrid;

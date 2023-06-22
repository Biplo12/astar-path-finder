import { useEffect, useState } from "react";

const useInitialGrid = (rows: number, cols: number) => {
  const [startCell, setStartCell] = useState<number[]>([]);
  const [endCell, setEndCell] = useState<number[]>([]);
  const [grid, setGrid] = useState<Array<Array<number>>>([]);

  useEffect(() => {
    const newGrid = [];
    for (let i = 0; i < cols; i++) {
      newGrid.push([]);
      for (let j = 0; j < rows; j++) {
        newGrid[i].push(0);
      }
    }
    const randomRowIndex = Math.floor(Math.random() * rows);
    const randomColIndex = Math.floor(Math.random() * rows);

    const randomRowIndex2 = Math.floor(Math.random() * rows);
    const randomColIndex2 = Math.floor(Math.random() * rows);
    setStartCell([randomRowIndex, randomColIndex]);
    setEndCell([randomRowIndex2, randomColIndex2]);
    newGrid[randomRowIndex][randomColIndex] = 2;
    newGrid[randomRowIndex2][randomColIndex2] = 3;
    setGrid(newGrid);
  }, [cols, rows]);

  return { grid, startCell, endCell, setGrid };
};

export default useInitialGrid;

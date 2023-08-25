import { useState } from "react";
import { Grid, AStarFinder } from "pathfinding";
import toast from "react-hot-toast";

const useRunAStar = (
  startCell: number[],
  endCell: number[],
  grid: number[][]
) => {
  const [pathCells, setPathCells] = useState<number[][]>([]);

  const runAStar = () => {
    if (startCell.length === 0 || endCell.length === 0) {
      console.log("Start or end cell not set");
      return;
    }

    const numRows = grid.length;
    const numCols = grid[0].length;
    const matrix = new Array(numRows);

    for (let row = 0; row < numRows; row++) {
      matrix[row] = new Array(numCols);
      for (let col = 0; col < numCols; col++) {
        matrix[row][col] = grid[row][col] === 1 ? 1 : 0;
      }
    }

    const gridInstance = new Grid(matrix);
    const finder = new AStarFinder();

    const path = finder.findPath(
      startCell[1],
      startCell[0],
      endCell[1],
      endCell[0],
      gridInstance
    );

    if (path.length === 0) {
      toast.error("No path found");
      return;
    }

    let index = 1;
    const intervalId = setInterval(() => {
      const [colIndex, rowIndex] = path[index];
      setPathCells((prevPathCells) => [...prevPathCells, [rowIndex, colIndex]]);
      index++;

      if (index === path.length - 1) {
        clearInterval(intervalId);
      }
    }, 50);
  };

  return { runAStar, pathCells, setPathCells };
};

export default useRunAStar;

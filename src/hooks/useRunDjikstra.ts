import { useState } from "react";
import PriorityQueue from "priorityqueuejs";

const useRunDjikstra = (
  startCell: number[],
  endCell: number[],
  grid: number[][]
) => {
  const [pathCells, setPathCells] = useState<number[][]>([]);

  const dijkstra = () => {
    if (startCell.length === 0 || endCell.length === 0) {
      console.log("Start or end cell not set");
      return;
    }
    const distances = new Map<string, number>();
    const visited = new Set<string>();
    const previous = new Map<string, string>();
    const pq = new PriorityQueue((a, b) => distances.get(a) - distances.get(b));

    const startCellKey = startCell.join(",");
    distances.set(startCellKey, 0);
    pq.enq(startCellKey);

    while (!pq.isEmpty()) {
      const currentCellKey = pq.deq();
      if (visited.has(currentCellKey)) continue;
      visited.add(currentCellKey);

      const [currentRowIndex, currentColIndex] = currentCellKey
        .split(",")
        .map(Number);
      const neighbors = getNeighbors(currentRowIndex, currentColIndex);

      for (const neighbor of neighbors) {
        const neighborKey = neighbor.join(",");

        if (visited.has(neighborKey)) continue;

        const newDistance = distances.get(currentCellKey) + 1;

        if (
          !distances.has(neighborKey) ||
          newDistance < distances.get(neighborKey)
        ) {
          distances.set(neighborKey, newDistance);
          previous.set(neighborKey, currentCellKey);
          pq.enq(neighborKey);
        }
      }
    }

    const endCellKey = endCell.join(",");
    if (!previous.has(endCellKey)) {
      console.log("No path found");
      return;
    }

    const path = [endCellKey];
    let current = endCellKey;
    while (current !== startCellKey) {
      current = previous.get(current);
      path.unshift(current);
    }
    setPathWithTimeout(
      path.map((key) => key.split(",").map(Number)).slice(0, -1)
    );
  };

  const setPathWithTimeout = (path: number[][]) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setPathCells((prevPathCells) => [...prevPathCells, path[index]]);
      index++;
      if (index === path.length) {
        clearInterval(intervalId);
      }
    }, 50);
  };

  const getNeighbors = (rowIndex: number, colIndex: number): number[][] => {
    const neighbors = [];
    if (rowIndex > 0 && grid[rowIndex - 1][colIndex] !== 1)
      neighbors.push([rowIndex - 1, colIndex]);
    if (rowIndex < 11 && grid[rowIndex + 1][colIndex] !== 1)
      neighbors.push([rowIndex + 1, colIndex]);
    if (colIndex > 0 && grid[rowIndex][colIndex - 1] !== 1)
      neighbors.push([rowIndex, colIndex - 1]);
    if (colIndex < 11 && grid[rowIndex][colIndex + 1] !== 1)
      neighbors.push([rowIndex, colIndex + 1]);
    return neighbors;
  };

  return { dijkstra, pathCells, setPathCells };
};

export default useRunDjikstra;

import React, { useState } from "react";
import Grid from "./Grid";
import RunAlgorithmButton from "./RunAlgorithmButton";
import useInitialGrid from "@/hooks/useInitialGrid";
import PathNotFound from "./PathNotFound";
import useRunAStar from "@/hooks/useRunAStar";
import ResetButton from "./ResetButton";
const Main: React.FC = (): JSX.Element => {
  const [pathNotFound, setPathNotFound] = useState(false);
  const { grid, startCell, endCell, setGrid, initializeGrid } =
    useInitialGrid();
  const { pathCells, setPathCells, runAStar } = useRunAStar(
    startCell,
    endCell,
    grid,
    setPathNotFound
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Grid
        grid={grid}
        setGrid={setGrid}
        startCell={startCell}
        endCell={endCell}
        setPathNotFound={setPathNotFound}
        pathCells={pathCells}
        setPathCells={setPathCells}
      />
      <div className="w-full grid grid-cols-12 gap-1">
        <RunAlgorithmButton runAStar={runAStar} />
        <ResetButton
          initializeGrid={initializeGrid}
          setPathCells={setPathCells}
          setPathNotFound={setPathNotFound}
        />
      </div>
      <PathNotFound pathNotFound={pathNotFound} />
    </div>
  );
};
export default Main;

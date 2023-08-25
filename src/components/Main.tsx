import React from "react";
import Grid from "./Grid";
import RunAlgorithmButton from "./RunAlgorithmButton";
import useInitialGrid from "@/hooks/useInitialGrid";
import useRunAStar from "@/hooks/useRunAStar";
import ResetButton from "./ResetButton";
import Legend from "./Legend";
const Main: React.FC = (): JSX.Element => {
  const { grid, startCell, endCell, setGrid, initializeGrid } =
    useInitialGrid();

  const { pathCells, setPathCells, runAStar } = useRunAStar(
    startCell,
    endCell,
    grid
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2 overflow-hidden">
      <Grid
        grid={grid}
        setGrid={setGrid}
        startCell={startCell}
        endCell={endCell}
        pathCells={pathCells}
        setPathCells={setPathCells}
      />
      <div className="w-full flex justify-center items-center gap-8 absolute bottom-4 left-0">
        <RunAlgorithmButton runAStar={runAStar} />
        <ResetButton
          initializeGrid={initializeGrid}
          setPathCells={setPathCells}
        />
      </div>
      <Legend />
    </div>
  );
};
export default Main;

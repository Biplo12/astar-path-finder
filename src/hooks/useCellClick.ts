const useCellClick = (
  grid: number[][],
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>,
  startCell: number[],
  endCell: number[],
  setHoveredCell: React.Dispatch<React.SetStateAction<number[]>>,
  setClickedCell: React.Dispatch<React.SetStateAction<number[]>>,
  clickedCell: number[]
) => {
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (rowIndex === startCell[0] && colIndex === startCell[1]) return;
    if (rowIndex === endCell[0] && colIndex === endCell[1]) return;
    const updatedGrid = [...grid];
    updatedGrid[rowIndex][colIndex] = 1;
    setGrid(updatedGrid);
    setClickedCell([rowIndex, colIndex]);
    setHoveredCell([rowIndex, colIndex]);
  };
  return { handleCellClick, clickedCell };
};

export default useCellClick;

const useCellHover = (
  grid: Array<Array<number>>,
  setGrid: React.Dispatch<React.SetStateAction<Array<Array<number>>>>,
  startCell: number[],
  endCell: number[],
  clickedCell: number[],
  isMouseDown: boolean,
  setHoveredCell: React.Dispatch<React.SetStateAction<number[]>>,
  hoveredCell: number[]
) => {
  const handleCellHover = (rowIndex: number, colIndex: number) => {
    if (rowIndex === startCell[0] && colIndex === startCell[1]) return;
    if (rowIndex === endCell[0] && colIndex === endCell[1]) return;
    if (isMouseDown) {
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][colIndex] = 1;
      setGrid(updatedGrid);
    } else if (clickedCell.length > 0 && !isMouseDown) {
      setHoveredCell([rowIndex, colIndex]);
    }
  };

  return { handleCellHover, hoveredCell, setHoveredCell };
};

export default useCellHover;

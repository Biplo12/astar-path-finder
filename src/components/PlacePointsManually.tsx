import React from "react";

interface IPlacePointsManually {
  grid: number[][];
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
  setPathNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  setPathCells: React.Dispatch<React.SetStateAction<number[][]>>;
  setStartCell: React.Dispatch<React.SetStateAction<number[]>>;
  setEndCell: React.Dispatch<React.SetStateAction<number[]>>;
}

const PlacePointsManually: React.FC<IPlacePointsManually> = ({
  grid,
  setGrid,
  setPathNotFound,
  setPathCells,
  setStartCell,
  setEndCell,
}): JSX.Element => {
  const handlePlacePointsManually = () => {};

  return (
    <button
      className="col-span-12 bg-blue-500"
      onClick={() => handlePlacePointsManually()}
    >
      Place Points Manually
    </button>
  );
};
export default PlacePointsManually;

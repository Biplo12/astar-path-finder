import React, { useEffect, useState } from "react";

interface ITetrisBlockProps {
  index: number;
}
const TetrisBlock: React.FC<ITetrisBlockProps> = ({ index }): JSX.Element => {
  const [randomColor, setRandomColor] = useState<string>("#000000");
  const [randomSize, setRandomSize] = useState<number>(0);
  const [randomRotation, setRandomRotation] = useState<number>(0);

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomSize = Math.floor(Math.random() * 100) + 150;
    const randomRotation = Math.floor(Math.random() * 4) * 90;

    setRandomColor(randomColor);
    setRandomSize(randomSize);
    setRandomRotation(randomRotation);
  }, []);

  const square1 = {
    width: randomSize,
    height: randomSize,
    backgroundColor: `#${randomColor}`,
    transform: `rotate(${randomRotation}deg)`,
  };

  const square2 = {
    width: randomSize,
    height: randomSize,
    backgroundColor: `#${randomColor}`,
    transform: `rotate(${randomRotation}deg)`,
  };

  const square3 = {
    width: randomSize,
    height: randomSize,
    backgroundColor: `#${randomColor}`,
    transform: `rotate(${randomRotation}deg)`,
  };

  let left, top, right, bottom;

  switch (index) {
    case 0:
      left = 1.5;
      top = 1.5;
      break;
    case 1:
      right = 1.5;
      top = 1.5;
      break;
    case 2:
      right = 1.5;
      bottom = 1.5;
      break;
    case 3:
      left = 1.5;
      bottom = 1.5;
      break;
    case 4:
      left = 1.5;
      top = 1.5;
      right = 1.5;
      bottom = 1.5;
      break;
  }
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 absolute p-4"
      style={{ left, top, right, bottom }}
    >
      <div
        style={{ transform: `rotate(${randomRotation}deg)` }}
        className="grid grid-cols-2 grid-rows-2 overflow-hidden gap-2"
      >
        <div className="col-span-1 row-span-1 opacity-10" style={square1} />
        <div
          className="col-start-1 col-span-1 row-start-2 opacity-10"
          style={square2}
        />
        <div
          className="col-start-2 col-span-1 row-start-2 opacity-10"
          style={square3}
        />
      </div>
    </div>
  );
};
export default TetrisBlock;

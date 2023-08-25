import React from "react";

const GITHUB_URL = "https://www.github.com/biplo12";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-white text-center px-4">
      <h1>
        <span className="text-2xl font-bold text-white">
          A* Pathfinding Visualizer
        </span>
      </h1>
      <p>
        <span className="text-lg">
          Made by:{" "}
          <a
            href={GITHUB_URL}
            className="text-[#42db1f]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Biplo12
          </a>
        </span>
      </p>
    </div>
  );
};
export default Header;

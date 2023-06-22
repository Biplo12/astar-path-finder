import React from "react";

interface IPathNotFound {
  pathNotFound: boolean;
}

const PathNotFound: React.FC<IPathNotFound> = ({
  pathNotFound,
}): JSX.Element => {
  return (
    <>
      {pathNotFound && (
        <div className="flex items-center justify-center">
          <p className="text-red-500">Path not found</p>
        </div>
      )}
    </>
  );
};
export default PathNotFound;

import React from "react";

const Header = ({tasks}) => {
  return (
    <>
      <div className="w-[25%] h-[25%] border-2 rounded-xl px-10 flex items-center justify-between">
        <div className="text-white">
          <h1 className="text-4xl font-semibold">Todo App</h1>
          <h5 className="text-sm">Learning simple them</h5>
        </div>
        <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-semibold">
          {tasks.filter((task) => task.completed === true).length}/
          {tasks.length}
        </div>
      </div>
    </>
  );
};

export default Header;

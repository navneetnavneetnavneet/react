import React from "react";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div className="w-[25%] h-[25%] border-2 rounded-xl px-10 flex items-center justify-between">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">Todo App</h1>
            <h5 className="text-sm">Learning simple them</h5>
          </div>
          <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-semibold">
            0/0
          </div>
        </div>
        <div className="w-[25%] my-10 flex items-center gap-2">
          <input
            type="text"
            placeholder="Write Todo..."
            className="w-full px-4 py-2 border-2 text-xl font-semibold text-white outline-none bg-transparent rounded-lg"
          />
          <button className="w-12 h-12 rounded-full bg-orange-600 flex-shrink-0 text-3xl font-semibold">
            +
          </button>
        </div>
        <ul className="taskitems w-[25%] h-[40%] overflow-y-auto duration-200 py-2">
          <li className="px-4 py-2 mb-5 border-2 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-orange-600"></div>
              <h1 className="text-white text-xl font-semibold">Task</h1>
            </div>
            <div className="flex items-center gap-5 text-white text-xl">
              <i className="ri-pencil-line cursor-pointer"></i>
              <i className="ri-delete-bin-line cursor-pointer"></i>
            </div>
          </li>
          <li className="px-4 py-2 mb-5 border-2 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 bg-green-600 border-green-600"></div>
              <h1 className="text-white text-xl font-semibold line-through">Task</h1>
            </div>
            <div className="flex items-center gap-5 text-white text-xl">
              <i className="ri-pencil-line cursor-pointer"></i>
              <i className="ri-delete-bin-line cursor-pointer"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;

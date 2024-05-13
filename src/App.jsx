import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [title, setTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newTitle = { id: Date.now(), title: title, completed: false };
    setTasks([...tasks, newTitle]);

    localStorage.setItem("todos", JSON.stringify([...tasks, newTitle]));
    setTitle("");
  };
  console.log(tasks);

  const completedHandler = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].completed = !copyTasks[index].completed;
    setTasks(copyTasks);

    localStorage.setItem("todos", JSON.stringify(copyTasks))
  }

  const deleteHandler = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);

    localStorage.setItem("todos", JSON.stringify(newTasks));
    
  }

  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div className="w-[25%] h-[25%] border-2 rounded-xl px-10 flex items-center justify-between">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">Todo App</h1>
            <h5 className="text-sm">Learning simple them</h5>
          </div>
          <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-semibold">
            {tasks.filter((task) => task.completed === true).length}/{tasks.length}
          </div>
        </div>
        <div className="w-[25%] my-10 flex items-center gap-2">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Write Todo..."
            className="w-full px-4 py-2 border-2 text-xl font-semibold text-white outline-none bg-transparent rounded-lg"
          />
          <button
            onClick={submitHandler}
            className="w-12 h-12 rounded-full bg-orange-600 flex-shrink-0 text-3xl font-semibold"
          >
            +
          </button>
        </div>
        <ul className="taskitems w-[25%] h-[40%] overflow-y-auto duration-200 py-2">
          {tasks.map((task, index) => {
            return (
              <li
                key={task.id}
                className="px-4 py-2 mb-5 border-2 rounded-md flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div onClick={() => completedHandler(index)} className={`w-5 h-5 rounded-full ${task.completed ? "bg-green-600" : "border-2 border-orange-600"}`}></div>
                  <h1 className={`text-white text-xl font-semibold ${task.completed ? "line-through" : ""}`}>
                    {task.title}
                  </h1>
                </div>
                <div className="flex items-center gap-5 text-white text-xl">
                  <i className="ri-pencil-line cursor-pointer"></i>
                  <i onClick={() => deleteHandler(task.id)}k className="ri-delete-bin-line cursor-pointer"></i>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;

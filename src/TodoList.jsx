import React from "react";

const TodoList = ({ task, tasks, index, setTasks }) => {
    
  const completedHandler = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].completed = !copyTasks[index].completed;
    setTasks(copyTasks);

    localStorage.setItem("todos", JSON.stringify(copyTasks));
  };

  const deleteHandler = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);

    localStorage.setItem("todos", JSON.stringify(newTasks));
  };

  return (
    <li
      key={task.id}
      className="px-4 py-2 mb-5 border-2 rounded-md flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div
          onClick={() => completedHandler(index)}
          className={`w-5 h-5 rounded-full ${
            task.completed ? "bg-green-600" : "border-2 border-orange-600"
          }`}
        ></div>
        <h1
          className={`text-white text-xl font-semibold ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.title}
        </h1>
      </div>
      <div className="flex items-center gap-5 text-white text-xl">
        <i className="ri-pencil-line cursor-pointer"></i>
        <i
          onClick={() => deleteHandler(task.id)}
          k
          className="ri-delete-bin-line cursor-pointer"
        ></i>
      </div>
    </li>
  );
};

export default TodoList;

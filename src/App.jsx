import React, { useState } from "react";
import Header from "./components/Header";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center">
        <Header tasks={tasks} />

        <CreateTodo tasks={tasks} setTasks={setTasks} />

        <ul className="taskitems w-[25%] h-[40%] overflow-y-auto duration-200 py-2">
          {tasks.map((task, index) => {
            return (
              <TodoList
                task={task}
                tasks={tasks}
                index={index}
                setTasks={setTasks}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;

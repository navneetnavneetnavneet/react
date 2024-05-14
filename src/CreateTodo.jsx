import React, { useState } from "react";

const CreateTodo = ({tasks, setTasks}) => {
  const [title, setTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newTitle = { id: Date.now(), title: title, completed: false };
    setTasks([...tasks, newTitle]);

    localStorage.setItem("todos", JSON.stringify([...tasks, newTitle]));
    setTitle("");
  };

  return (
    <>
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
    </>
  );
};

export default CreateTodo;

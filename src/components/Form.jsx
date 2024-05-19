import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { taskcontext } from "../contexts/TaskContext";

const Form = () => {
  const [tasks, setTasks] = useContext(taskcontext);
  
  const [title, setTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newTaks = { id: nanoid(), title, completed: false };

    setTasks([...tasks, newTaks]);

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTaks]));
    setTitle("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-[30%] mt-10 flex items-center gap-2"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Enter Todo Message..."
        className="w-full px-4 py-2 border-2 bg-transparent rounded-lg outline-none text-xl text-white font-semibold"
      />
      <button className="w-12 h-12 rounded-full bg-orange-600 text-2xl font-semibold flex items-center justify-center flex-shrink-0">
        +
      </button>
    </form>
  );
};

export default Form;

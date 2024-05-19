import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // console.log(tasks);

  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col items-center justify-center">
      <Header tasks={tasks} />

      <Form tasks={tasks} setTasks={setTasks} />

      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;

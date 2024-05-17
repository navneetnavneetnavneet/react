import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  console.log(users);

  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-orange-600">Two-way binding</h1>
        <Form users={users} setUsers={setUsers} />

        <List users={users} setUsers={setUsers} />
      </div>
    </>
  );
};

export default App;

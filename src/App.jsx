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
      <div>
        <h1>Form</h1>
        <Form users={users} setUsers={setUsers} />

        <List users={users} setUsers={setUsers} />
      </div>
    </>
  );
};

export default App;

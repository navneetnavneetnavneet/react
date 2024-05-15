import React from "react";

const List = ({ users, setUsers }) => {
  const deleteHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);

    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">List Render</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Contact: {user.contact}</h1>
            <button onClick={() => deleteHandler(user.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default List;

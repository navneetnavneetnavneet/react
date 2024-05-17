import React from "react";

const List = ({ users, setUsers }) => {
  const deleteHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);

    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-orange-600 mb-5">List Render</h1>
      {users.map((user) => {
        return (
          <div key={user.id} 
          className="border-2 border-white/30 w-80 px-4 py-2 rounded-md mb-2">
            <h1 className="text-lg font-semibold text-white">Name: {user.name}</h1>
            <h1 className="text-sm font-semibold text-white">Contact: {user.contact}</h1>
            <button 
            onClick={() => deleteHandler(user.id)} 
            className="px-4 py-2 mt-2 text-sm text-white font-semibold bg-red-600 rounded-md">Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default List;

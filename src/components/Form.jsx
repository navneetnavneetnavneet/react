import React, { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = { id: nanoid(), name, email, contact };
    setUsers([...users, newUser]);

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setName("");
    setEmail("");
    setContact("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className="px-10 py-10 text-white font-semibold">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          className="w-80 px-4 py-2 rounded-md outline-none border-2 bg-transparent border-white/30"
        />
        <br />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email@email.com"
          className="w-80 px-4 py-2 rounded-md outline-none border-2 bg-transparent border-white/30"
        />
        <br />
        <br />
        <input
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          type="number"
          placeholder="Contect"
          className="w-80 px-4 py-2 rounded-md outline-none border-2 bg-transparent border-white/30"
        />
        <br />
        <br />
        <button className="w-80 px-4 py-2 rounded-md outline-none border-2 bg-blue-600 border-none">Submit</button>
      </form>
    </>
  );
};

export default Form;

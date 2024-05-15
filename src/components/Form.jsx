import React, { useState } from "react";

const Form = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = { id: Date.now(), name, email, contact };
    setUsers([...users, newUser]);

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setName("");
    setEmail("");
    setContact("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <br />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email@email.com"
        />
        <br />
        <br />
        <input
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          type="number"
          placeholder="Contect"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;

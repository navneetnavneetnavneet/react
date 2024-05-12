import React from "react";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("bhopal");
  const [discription, setDiscription] = useState("");
  const [accept, setAccept] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log({ username, email, gender, city, discription, accept });
    const newUser = { username, email, gender, city, discription, accept };
    setUsers([...users, newUser]);

    setUsername("");
    setEmail("");
    setGender("male");
    setCity("bhopal");
    setDiscription("");
    setAccept(false);
  };

  // console.log(users);

  const listRender =
    users.length > 0 ? (
      users.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.username}</h1>
            <p>{user.city}</p>
          </div>
        );
      })
    ) : (
      <h1>no data prasent</h1>
    );

  return (
    <>
      <h1>Form Handling in React</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Username"
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
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "male" ? true : false}
          type="radio"
          value="male"
          name="gender"
        />
        Male
        <input
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "female" ? true : false}
          type="radio"
          value="female"
          name="gender"
        />
        Female
        <input
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "other" ? true : false}
          type="radio"
          value="other"
          name="gender"
        />
        Other
        <br />
        <br />
        <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option value="delhi">Delhi</option>
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <br />
        <textarea
          onChange={(e) => setDiscription(e.target.value)}
          value={discription}
          placeholder="Write text here..."
        ></textarea>
        <br />
        <br />
        <input
          onChange={(e) => setAccept(e.target.checked)}
          checked={accept ? true : false}
          type="checkbox"
        />
        Accept
        <br />
        <br />
        <button>Submit</button>
      </form>

      {listRender}
    </>
  );
};

export default App;

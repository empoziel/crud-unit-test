import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Hasan",
      email: "hasandev@gmail.com",
      age: 26,
    },
    {
      name: "Ahmet",
      email: "ahmetui@gmail.com",
      age: 36,
    },
  ]);

  const addUser = (user) => {
    setUsers(users.concat(user));
  };
  return (
    <div className="container">
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
}

export default App;

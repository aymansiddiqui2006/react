import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };

  return (
    <div>
      <h1>LOGIN</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Username"
        required
      />

      <input
        type="password"
        value={pass}
        onChange={(e) => setpass(e.target.value)}
        placeholder="password"
        required
      />

      <label>
        <input type="checkbox" /> btech
      </label>

      <label>
        <input type="checkbox" /> medical
      </label>

      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;

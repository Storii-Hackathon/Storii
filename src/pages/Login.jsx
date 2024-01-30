import React, { useState } from "react";
import axios from 'axios'; // Ensure axios is imported

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add this line for error handling

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      });

      if (response.status === 200) {
        // const username = response.data.username;
        onLogin(true, username);
        console.log(username)
        setError(""); // Clear any existing errors on successful login
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
      onLogin(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error messages */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      await axios.post(
        "https://taskflow-production-38c8.up.railway.app/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration Successful");

      window.location.href = "/login";

    } catch (error) {

      alert("Registration Failed");

      console.log(error);

    }

  };

  return (
    <div className="loginPage">

      <div className="loginBox">

        <h1>Create Account</h1>

        <p>Register to start using TaskFlow</p>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;
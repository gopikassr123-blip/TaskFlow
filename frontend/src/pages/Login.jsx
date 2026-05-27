import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "https://taskflow-production-38c8.up.railway.app/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      window.location.href = "/dashboard";

    } catch (error) {

      alert("Login Failed");

      console.log(error);

    }

  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={handleLogin}
          style={styles.button}
        >
          Login
        </button>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },

  card: {
    background: "#1e293b",
    padding: "40px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "350px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  button: {
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#38bdf8",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
  },

};

export default Login;
import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateTask from "./pages/CreateTask.jsx";
import Register from "./pages/Register.jsx";
import Projects from "./pages/Projects.jsx";
import Tasks from "./pages/Tasks.jsx";
import Team from "./pages/Team.jsx";

function Home() {
  return (
    <div style={pageStyle}>

      <h1 style={{ color: "#38bdf8", fontSize: "50px" }}>
        TaskFlow
      </h1>

      <p>Professional Team Collaboration System</p>

      <Link to="/login">
        <button style={buttonStyle}>Login</button>
      </Link>

      <Link to="/register">
        <button style={buttonStyle}>Register</button>
      </Link>

      <Link to="/dashboard">
        <button style={buttonStyle}>Dashboard</button>
      </Link>

      <Link to="/create-task">
        <button style={buttonStyle}>Create Task</button>
      </Link>

      <Link to="/projects">
        <button style={buttonStyle}>Projects</button>
      </Link>

      <Link to="/tasks">
        <button style={buttonStyle}>Tasks</button>
      </Link>

      <Link to="/team">
        <button style={buttonStyle}>Team</button>
      </Link>

    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#0f172a",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  fontFamily: "Arial",
};

const buttonStyle = {
  padding: "14px 28px",
  border: "none",
  borderRadius: "12px",
  background: "#38bdf8",
  color: "#0f172a",
  fontWeight: "bold",
  cursor: "pointer",
};

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/create-task" element={<CreateTask />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/tasks" element={<Tasks />} />

      <Route path="/team" element={<Team />} />

    </Routes>
  );
}

export default App;
import { useState } from "react";

import axios from "axios";

function CreateTask() {

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleCreateTask = async () => {

    try {

      const token = localStorage.getItem("token");

      await axios.post(
        `https://taskflow-production-38c8.up.railway.app/api/tasks?token=${token}`,
        {
          title,
          status,
        }
      );

      alert("Task Created Successfully");

      window.location.href = "/dashboard";

    } catch (error) {

      alert("Failed to Create Task");

      console.log(error);

    }

  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Create Task</h1>

        <input
          type="text"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.input}
        >

          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>

        </select>

        <button
          onClick={handleCreateTask}
          style={styles.button}
        >
          Create Task
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

export default CreateTask;
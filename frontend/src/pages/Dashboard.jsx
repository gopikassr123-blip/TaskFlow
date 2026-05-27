import "./Dashboard.css";

import { Link } from "react-router-dom";

import TaskCard from "../components/TaskCard";

import { useEffect, useState } from "react";

import axios from "axios";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      window.location.href = "/login";

    } else {

      fetchTasks();

    }

  }, []);

  const fetchTasks = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        `https://taskflow-production-38c8.up.railway.app/api/tasks?token=${token}`
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="dashboardPage">

      <aside className="sidebar">

        <h2>TaskFlow</h2>

        <Link to="/dashboard">
          <p>Dashboard</p>
        </Link>

        <Link to="/projects">
          <p>Projects</p>
        </Link>

        <Link to="/tasks">
          <p>Tasks</p>
        </Link>

        <Link to="/team">
          <p>Team</p>
        </Link>

        <p
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </p>

      </aside>

      <main className="dashboardMain">

        <h1>Dashboard</h1>

        <p className="welcome">
          Welcome back! Manage your team tasks here.
        </p>

        <Link to="/create-task">
          <button className="createBtn">
            + Create Task
          </button>
        </Link>

        <div className="stats">

          <div className="statCard">
            <h3>{tasks.length}</h3>
            <p>Total Tasks</p>
          </div>

        </div>

        <div className="taskSection">

          <h2>Recent Tasks</h2>

          {
            tasks.map((task) => (
              <TaskCard
                key={task._id}
                id={task._id}
                title={task.title}
                status={task.status}
              />
            ))
          }

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
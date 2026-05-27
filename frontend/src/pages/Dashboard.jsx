import "./Dashboard.css";

import { Link } from "react-router-dom";

import TaskCard from "../components/TaskCard";

import { useEffect, useState } from "react";

import axios from "axios";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }

    const token = localStorage.getItem("token");

    if (!token) {

      window.location.href = "/login";

    } else {

      fetchTasks();

    }

  }, []);

  const toggleTheme = () => {

    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

  };

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

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || task.status === filterStatus;

    return matchesSearch && matchesStatus;

  });

  return (
    <div className={`dashboardPage ${theme === "light" ? "lightMode" : ""}`}>

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

        <button
          onClick={toggleTheme}
          className="themeToggleBtn"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1>Dashboard</h1>

        <p className="welcome">
          Welcome back! Manage your team tasks here.
        </p>

        <Link to="/create-task">
          <button className="createBtn">
            + Create Task
          </button>
        </Link>

        <div className="searchFilterBox">

          <input
            type="text"
            placeholder="🔍 Search Tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filterSelect"
          >

            <option>All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>

          </select>

        </div>

        <div className="stats">

          <div className="statCard">
            <h3>{filteredTasks.length}</h3>
            <p>Total Tasks</p>
          </div>

        </div>

        <div className="taskSection">

          <h2>Recent Tasks</h2>

          {
            filteredTasks.map((task) => (
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
import { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Login Page",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Create Dashboard UI",
      status: "Pending",
    },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
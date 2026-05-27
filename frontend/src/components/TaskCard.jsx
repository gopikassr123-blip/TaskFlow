import axios from "axios";

function TaskCard({ title, status, id }) {

  const handleDelete = async () => {

    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}?token=${token}`
      );

      alert("Task Deleted");

      window.location.reload();

    } catch (error) {

      alert("Delete Failed");

      console.log(error);

    }

  };

  const handleStatusUpdate = async () => {

    try {

      const token = localStorage.getItem("token");

      let newStatus = "Pending";

      if (status === "Pending") {

        newStatus = "In Progress";

      } else if (status === "In Progress") {

        newStatus = "Completed";

      }

      await axios.put(
        `http://localhost:5000/api/tasks/${id}?token=${token}`,
        {
          status: newStatus,
        }
      );

      alert("Status Updated");

      window.location.reload();

    } catch (error) {

      alert("Update Failed");

      console.log(error);

    }

  };

  return (
    <div className="taskCard">

      <h3>{title}</h3>

      <p>{status}</p>

      <button onClick={handleStatusUpdate}>
        Update Status
      </button>

      <button onClick={handleDelete}>
        Delete
      </button>

    </div>
  );
}

export default TaskCard;
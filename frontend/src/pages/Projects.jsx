function Projects() {
  return (
    <div style={styles.page}>
      <h1>Projects</h1>
      <p>Manage your team projects here.</p>

      <div style={styles.card}>
        <h3>TaskFlow Project</h3>
        <p>Status: Active</p>
        <p>Team task management system using MERN Stack.</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    padding: "40px",
    fontFamily: "Arial",
  },
  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "20px",
  },
};

export default Projects;
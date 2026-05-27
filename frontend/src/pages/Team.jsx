function Team() {
  return (
    <div style={styles.page}>
      <h1>Team</h1>
      <p>Manage team members here.</p>

      <div style={styles.card}>
        <h3>Gopika</h3>
        <p>Role: Full Stack Developer</p>
        <p>Working on MERN Stack TaskFlow project.</p>
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

export default Team;
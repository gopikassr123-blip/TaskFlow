import "./Login.css";

function Register() {
  return (
    <div className="loginPage">
      <div className="loginBox">
        <h1>Create Account</h1>
        <p>Register to start using TaskFlow</p>

        <input type="text" placeholder="Enter name" />

        <input type="email" placeholder="Enter email" />

        <input type="password" placeholder="Enter password" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;
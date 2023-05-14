import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return true;
  };

  const clearForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword({ value: "" });
    setRole("Role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value.length < 8) {
      () => PasswordErrorMessage;
    }
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              autocomplete
              placeholder="First name"
              id="firstName"
              autoFocus
            />
          </div>

          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              id="lastName"
              autocomplete
            />
          </div>

          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              id="email"
              autocomplete
            />
          </div>

          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>

          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

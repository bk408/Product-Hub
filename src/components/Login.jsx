import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const Login = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setUserName } = useContext(UserContext);

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!userInput.name) {
      newErrors.name = "Name is required";
    } else if (userInput.name.length < 4 || userInput.name.length > 12) {
      newErrors.name = "Name length must be between 4 to 12 characters";
    }

    if (!userInput.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(userInput.email)) {
      newErrors.email = "Please enter valid email address";
    }

    if (!userInput.password) {
      newErrors.password = "Password is Required";
    } else if (
      userInput.password.length < 8 ||
      userInput.password.length > 16
    ) {
      newErrors.password = "Password length must be between 8 to 16 characters";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login success");
      setUserName(userInput.name.toUpperCase());

      navigate("/home-page");
    } else {
      console.log("Invalid Login credential");
    }
  };
  return (
    <div className="log-container">
      <div className="log-box">
        <div className="log-title">
          <h1>Product Hub</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={userInput.name}
            onChange={handleChange}
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={userInput.email}
            onChange={handleChange}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={userInput.password}
            onChange={handleChange}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

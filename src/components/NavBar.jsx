import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    if (e.target.value === "logout") {
      navigate("/login");
    }
  };
  return (
    <div className="nav-container">
      <div className="nav-box">
        <div className="nav-title">
          <h3>ProductHub</h3>
          <select onChange={handleLogOut}>
            <option value="userName">{userName || "Guest"}</option>
            <option value="logout">Logout</option>
            <option value="cart">Cart</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

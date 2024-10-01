import { useNavigate } from "react-router-dom";
import erro from "../assets/error-page.png";

const Error = () => {
  const navigate = useNavigate();

  const handleErrorBtn = () => {
    navigate("/login");
  };
  return (
    <div className="error-container">
      <div className="error-box">
        <div className="error-img">
          <img src={erro} alt="error-img" />
        </div>
        <button onClick={handleErrorBtn} className="error-btn">
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Error;

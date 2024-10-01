import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleShopNow = () => {
    navigate("/home-page");
  };
  return (
    <div className="home-container">
      <div className="home-box">
        <div className="home-img">
          <img src={hero} alt="shop-img" />
        </div>
        <div className="home-details">
          <h2>
            Welcome to <span>Product Hub</span> - Your Ultimate Shopping
            Destination!
          </h2>
          <br />
          <p>
            Discover a world of hand-picked products tailored just for you.
            Whether you are looking for the latest trends or everyday
            essentials,
          </p>
          <br />
          <p>
            {" "}
            we have it all! Explore our exclusive collections, enjoy seamless
            browsing, and shop with confidence.
          </p>
          <br />
          <p>
            Our mission is to provide you with an easy and delightful shopping
            experience.
          </p>
          <br />
          <p>Your shopping experience begins here—start exploring today!</p>

          <button onClick={handleShopNow}>Shop Now</button>
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

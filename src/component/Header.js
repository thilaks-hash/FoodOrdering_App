import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("login");
  const onlineStatus = useOnlineStatus();

  const handleLogin = () => {
    login === "login" ? setLogin("LogOut") : setLogin("login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="w-5" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLogin}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setLogin] = useState("login");

  const handleLogin = () => {
    login === "login" ? setLogin("LogOut") : setLogin("login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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

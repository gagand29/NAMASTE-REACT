import { LOGO_URL } from "../utils/constant";
import { useState,useEffect } from "react";
import {Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(()=>{
    console.log("useeffect called");
  },[btnName])
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to={"/About"}>About us</Link></li>
          <li><Link to={"/contact"}>contact us</Link></li>
          <li>cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

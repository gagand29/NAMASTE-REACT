import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useeffect called");
  }, [btnName]);
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white shadow-sm px-8 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <img className="w-12 h-12 object-contain rounded-md" src={LOGO_URL} />
        <span className="text-2xl font-extrabold text-orange-500 tracking-tight">
          Swiggy
        </span>
      </div>
      <div className="nav-items">
        <ul className="flex items-center gap-7 py-4 text-gray-600 font-medium text-[15px]">
          <li className="flex items-center gap-1 text-xs text-gray-400">
            {onlineStatus ? "🟢" : "🔴"} {onlineStatus ? "Online" : "Offline"}
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">
            Home
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to={"/About"}>About us</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors flex items-center gap-1">
            🛒 Cart
          </li>
          <button
            className="px-5 py-2 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-colors"
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

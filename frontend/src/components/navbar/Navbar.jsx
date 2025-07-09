import { useState } from "react";
import "./navbar.css";

const Navbar = () => {

  const [menu, Setmenu] = useState("home");
  return (
    <div className="navbar">
        <img src="logo.png" alt="" className="logo" />
        <ul className="navbar-menu">
          <li onClick={() => Setmenu("home")} className={menu==="home"?"active":""}>home</li>
          <li onClick={() => Setmenu("menu")} className={menu==="menu"?"active":""}>menu</li>
          <li onClick={() => Setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
          <li onClick={() => Setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
          <img src="search_icon.png" alt="" />
          <div className="navbar-search-icon">
            <img src="basket_icon.png" alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
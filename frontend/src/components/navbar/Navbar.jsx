import { useContext, useState } from "react";
import "./navbar.css";
import {Link} from "react-router-dom"
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {

  const [menu, Setmenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
        <Link to="/"><img src="logo.png" alt="" className="logo" /></Link>
        <ul className="navbar-menu">
          <Link to="/" onClick={() => Setmenu("home")} className={menu==="home"?"active":""}>home</Link>
          <a href="#explore-menu" onClick={() => Setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
          <a href="#app-download" onClick={() => Setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
          <a href="#footer" onClick={() => Setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
          <img src="search_icon.png" alt="" />
          <div className="navbar-search-icon">
            <Link to="/cart"><img src="basket_icon.png" alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={()=> setShowLogin(true)} >Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
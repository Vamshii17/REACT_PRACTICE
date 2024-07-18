import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserInfo } from "../../Navigation/navigationStack";

const NavBar = () => {
  const globalInfo = useContext(UserInfo)
  console.log("globalInfo:", globalInfo)
  const {name, count} = globalInfo;
    const lightMode = true;
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        padding: 20
    }
    return (
      <nav
        className={`navbar navbar-expand-sm bg-${
          lightMode ? "light" : "dark"
        } navbar-${lightMode ? "light" : "dark"}`}
      >
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link style={linkStyle} to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link style={linkStyle} to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link style={linkStyle} to={"/setting"}>Setting</Link>
            </li>
            <li className="nav-item">
              <Link style={linkStyle} to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item">
              {name}
              {count}
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  export default NavBar;
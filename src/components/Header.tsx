import { NavLink } from "react-router-dom";
import "./../css/header.css";

export default function Home() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/profile">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

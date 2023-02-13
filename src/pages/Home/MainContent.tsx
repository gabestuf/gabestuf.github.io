import { NavLink } from "react-router-dom";
import imageOfGabe from "./../../assets/images/gabe1.jpg";

export default function Home() {
  return (
    <div className="home">
      <img className="mobile-picture" src={imageOfGabe} alt="photo of me" />
      <div className="words">
        <h1>Gabriel Camacho</h1>
        <p>
          Currently studying computer science at <a href="https://www.wpi.edu/">WPI</a>
        </p>
        <p>gcamacho1258@gmail.com</p>
        <NavLink className="link" to="/projects">
          Check out what I've been up to!
        </NavLink>
      </div>
    </div>
  );
}

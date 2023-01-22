import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about-us">About Us</Link>
        </li>

        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;

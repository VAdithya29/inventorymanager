import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nbdiv">
      <h1>INVENTORY MANAGER</h1>
      <ul className="nb">
        <Link className="link" to={"/app"}>
          <li className="nbitems">
            <button>ADD NEW ITEM</button>
          </li>
        </Link>
        <Link className="link" to={"/disp"}>
          <li className="nbitems">
            <button>VIEW ALL ITEMS</button>
          </li>
        </Link>
        <Link className="link" to={"/notes"}>
          <li className="nbitems">
            <button>NOTES</button>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

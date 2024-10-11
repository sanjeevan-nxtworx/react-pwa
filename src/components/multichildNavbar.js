import { Link } from "react-router-dom";
import { useState } from "react";

function MultiChildNavbar() {
  const [name, setName] = useState("Mahesh");
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to={`/Form/${name}/Hello`}>Form</Link>
        </li>
        <li>
          <Link to="/Api">API</Link>
        </li>
      </ul>
    </div>
  );
}

export default MultiChildNavbar;

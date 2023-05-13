import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="Menu">
        <li>
          <Link to="/">
            <span className="ListItems-menu">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <span className="ListItems-menu">Users</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="ListItems-menu">AboutUs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

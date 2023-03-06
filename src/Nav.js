import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h2 className="nav-brand">Durga !</h2>
      <ul className="menu">
        <li>
          <Link to={"/"}>
            <button className="menu-btn">Home</button>
          </Link>
        </li>
        <li>
          <Link to={"/newBlogs"}>
            {" "}
            <button className="menu-btn">New Blogs</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

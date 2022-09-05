import React from "react";
import logo from "./logos.png";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
export const Header = () => {
  return (
    <nav className="header">
        <Link to="/" ><img src={logo} className="nlogo" ></img></Link>

      <div>
        <Link className="allLinks" to="/">
          TV Shows
        </Link>
        <Link className="allLinks" to="/">
          Movies
        </Link>
        <Link className="allLinks" to="/">
          Recently Added
        </Link>
        <Link className="allLinks" to="/">
          My List
        </Link>
      </div>
      <RiSearchLine />
    </nav>
  );
};

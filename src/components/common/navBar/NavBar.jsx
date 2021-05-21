import React, { useContext } from "react";
import { SNav } from "./NavBar.styled";
import { Link } from "react-router-dom";
import { User } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  const { user } = useContext(User);

  const logged = user ? (
    <span>
      Welcome {user.username} |{" "}
      <Link to="/logout" className="logged">
        Logout
      </Link>
    </span>
  ) : (
    <Link to="/login" className="logged">
      <FontAwesomeIcon icon={faUser} />
      <span> Login</span>
    </Link>
  );

  return <SNav className="navbar navbar-expand-md">{logged}</SNav>;
};

export default NavBar;

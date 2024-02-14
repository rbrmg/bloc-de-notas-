import React from "react";
import { NavLink } from "react-router-dom";
import catImage from "../assets/appdenotas.png";
import "./Header.css";
import { useUser } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, setUser] = useUser();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="header-container">
      {/* Enlace dinámico del logo */}
      <NavLink to={user ? "/notes" : "/"} className="logo">
        <img src={catImage} alt="logo" />
      </NavLink>
      <div className="nav">
        {user ? (
          <>
            <span className="user-name">{user.userName}</span>
            {/* Agrega un espacio entre el nombre de usuario y el botón de logout */}
            <span>&nbsp;&nbsp;</span>
            <NavLink
              to="/create"
              onClick={handleLogout}
              className="logout-link"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
            <NavLink to="/CreateUser" className="register-link">
              Register
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

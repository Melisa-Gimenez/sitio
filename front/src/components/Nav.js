import "../styles/Nav.css";
import React from "react";
import { NavLink, NavLinkLink } from "react-router-dom";

const Navr = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isAvtive ? "activo" : undefined)}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recetasdulces"
              className={({ isActive }) => (isAvtive ? "activo" : undefined)}
            >
              RecetasDulces
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recetassaladas"
              className={({ isActive }) => (isAvtive ? "activo" : undefined)}
            >
              RecetasSaladas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subscripcion"
              className={({ isActive }) => (isAvtive ? "activo" : undefined)}
            >
              subscripcion
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const logo = "https://raw.githubusercontent.com/oscar-coderookie/fabs/master/src/assets/img/logo.png"

const Header = () => {

  return (
    <div className="header">

        <NavLink className="header__logo" to="/">
          <img src={logo} alt="logo" />
          <h4>federación andaluza de béisbol y sóftbol</h4>

        </NavLink>
      <ul className="header-list">
        <Link className="header-links" exact to="/teams">
          clubes
        </Link>
        <Link className="header-links" exact to="/events">
          competiciones
        </Link>
        <Link className="header-links" exact to="/news">
          noticias
        </Link>
        <Link className="header-links" exact to="/contact">
          contacto
        </Link>
        <Link className="header-links" exact to="/images">
          fotos
        </Link>
      </ul>


    </div>
  );
};

export default Header;
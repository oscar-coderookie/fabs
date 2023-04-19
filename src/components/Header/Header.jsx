import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from './../../assets/img/fabs-logo.png';
import { Slant as Hamburger } from "hamburger-react";
import NavSocial from "../NavSocial/NavSocial";
import { FaUser } from "react-icons/fa";


const Header = () => {

  const [open, setOpen] = useState(false);
  const ubication = window.location.pathname;

  const menuLinks = [
    { name: "Clubes", url: "/teams" },
    { name: "competiciones", url: "/events" },
    { name: "imágenes", url:"/images"},
    { name: "noticias", url:"/news"},
    { name: "contacto", url:"/contact"},
    { name: "patrocinadores", url:"/sponsors"},

    
  ];

  return (
    <div className="header">
      <div className="header-block">
        <div className="header-menu">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            easing="ease-in"
            rounded
            hideOutline={false}
            onClick={() => setOpen(!open)}
            color="#ffffff"
          ></Hamburger>
        </div>
      <div className="header-logo">
        <h2>Federación Andaluza de Béisbol y Sóftbol</h2>
         <img src={logo} alt="logo-fabs" />
        {/*  <NavLink to="/login">
          <FaUser className="header__user"/>
         </NavLink> */}
         
      </div>
       

      </div>
      {open === false ? null : (
        <nav className="header-nav">
          <div className="header-nav__sections">
            {ubication === "/" ? null : (
              <NavLink
                to="/"
                className="header-nav__links"
                onClick={() => setOpen(!open)}
              >
                Home
              </NavLink>
            )}
            {menuLinks.map((links, index) => {
              return (
                <NavLink
                  key={index}
                  to={links.url}
                  className="header-nav__links"
                  onClick={() => setOpen(!open)}
                >
                  {links.name}
                </NavLink>
              );
            })}
          </div>
<NavSocial/>
        </nav>
      )}
    </div>
  );
};

export default Header;
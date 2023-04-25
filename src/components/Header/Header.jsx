import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from './../../assets/img/fabs-logo.png';
import { Slant as Hamburger } from "hamburger-react";
import NavSocial from "../NavSocial/NavSocial";
import { FaMinus, FaPlus } from "react-icons/fa";


const Header = () => {

  const [open, setOpen] = useState(false);
  const [documentosOpen, setDocumentosOpen] = useState(false);
  const handleDocumentosClick = () => {
    setDocumentosOpen(!documentosOpen);
  };
  
  const menuLinks = [
    { name: "Home", url: "/" },
    { name: "Clubes", url: "/teams" },
    { name: "competiciones", url: "/events" },
    {
      name: "Documentos",
      url: "",
      subLinks: [
        { name: "Circulares", url: "/bulletin" },
        { name: "Reglamentos", url: "/regulation" },
      ],
    },
    { name: "noticias", url:"/news"},
    { name: "galeria", url:"/gallery"},
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
            
          <div className="header-nav__submenu">
  
  </div>
          {menuLinks.map((link, index) => {
  if (link.subLinks) {
    return (
      <div key={index} className="header-nav__toogle">
        <div
          className="header-nav__documents header-nav__links"
          onClick={handleDocumentosClick}
        >
          {documentosOpen ? <FaMinus className="header-nav__icons"/> : <FaPlus className="header-nav__icons"/>}
         <p>Documentos</p>
          
        </div>

        {documentosOpen &&
          link.subLinks.map((subLink, index) => (
            <NavLink
              key={index}
              to={subLink.url}
              className="header-nav__links"
              onClick={() => setOpen(false)}
            >
              {subLink.name}
            </NavLink>
          ))}
      </div>
    );
  } else {
    return (
      <NavLink
        key={index}
        to={link.url}
        className="header-nav__links"
        onClick={() => setOpen(false)}
      >
        {link.name}
      </NavLink>
    );
  }
})}
          </div>
<NavSocial/>
        </nav>
      )}
    </div>
  );
};

export default Header;
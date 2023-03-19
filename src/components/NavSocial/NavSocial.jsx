import React from "react";
import './NavSocial.scss';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const NavSocial = () => {
  return (
    <div className="nav__social">
      <a
        href="https://m.facebook.com/profile.php?id=100077162754693&_rdr"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className="nav__icons" />
      </a>

      <a
        href="https://twitter.com/oficial_fabs?lang=es"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="nav__icons" />
      </a>
    </div>
  );
};

export default NavSocial;
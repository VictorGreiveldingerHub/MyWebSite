import React from 'react'
import { Link } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

const HeaderLeft = () => {
  return (
    <Menu>
      {/* <Menu.Item as='a'>
        Language
      </Menu.Item> */}
      <Link to="/">Acceuil</Link>
      <Link to="/profil">Profil / CV</Link>
      <Link to="/travaux">Travaux</Link>
      </Menu>
    );
};

export default HeaderLeft;
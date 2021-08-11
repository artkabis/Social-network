import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to='/' exact activeClassName="active-left-nav">
            <img title="Accueil" src="./img/icons/home.svg" alt="home"/>
          </NavLink>
          <br/>
          <NavLink to='/trending' exact activeClassName="active-left-nav">
            <img title="Mes tendances" src="./img/icons/rocket.svg" alt="tendance"/>
          </NavLink>
          <br/>
          <NavLink to='/profil' exact activeClassName="active-left-nav">
            <img title="Mon Profil"  src="./img/icons/user.svg" alt="profil"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
import React from "react";
import sytles from "./Header.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
const Header = () => {
  const btn = React.useRef();
  const { pathname } = useLocation();
  React.useEffect(() => {
    btn.current.classList.remove("active");
  }, [pathname]);

  function handleClick({ target }) {
    target.classList.toggle("active");
  }

  return (
    <header className={sytles.header}>
      <div className={sytles.container}>
        <Link to="/" className={sytles.Logo}>
          <img src={Logo} alt="" />
        </Link>
        <div
          onClick={handleClick}
          ref={btn}
          className={sytles.mobileButton}
        ></div>

        <nav className={sytles.nav} aria-label="Navegação Principal">
          <ul className={sytles.navList}>
            <NavLink to="contato">Contato</NavLink>
            <NavLink to="linhas">Linhas</NavLink>
            <NavLink to="sobre">Sobre</NavLink>
            <NavLink to="passagens">Passagens</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

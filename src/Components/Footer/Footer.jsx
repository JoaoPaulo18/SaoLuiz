import React from 'react'
import Logo from "../../assets/Logo.png";
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <NavLink className={styles.logo} to={'/'}><img src={Logo}/></NavLink>

        <div className={styles.contatos}>
            <h3>Contatos</h3>
            <a href="mailto:contato@saoluizmg.com.br">contato@saoluizmg</a>
            <a href="tel:+5531937624500">37624500</a>
        </div>

<div className={styles.compre}>
    <h3>Compre sua passagem conosco!</h3>
    <NavLink to="passagens">Sua Passagem</NavLink>
</div>
        {/* <div className={styles.menu}>
            <h2></h2>
            <NavLink to="contato">Contato</NavLink>
            <NavLink to="linhas">Linhas</NavLink>
            <NavLink to="sobre">Sobre</NavLink>
            <NavLink to="passagens">Passagens</NavLink>
        </div> */}
        <h3>São Luiz © Todos os direitos reservados.</h3>
    </footer>
  )
}

export default Footer
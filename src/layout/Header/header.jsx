import React from 'react';
import './header.css'; // Importez le fichier CSS

function Header() {
    return (
        <header className="header">
            <img src="./assets/logo.png" alt="Logo de votre site" className="logo" />
            <nav className="nav">
                <a href="accueil">Accueil</a>
                <a href="a-propos">À propos</a>
            </nav>
        </header>
    );
}

export default Header;
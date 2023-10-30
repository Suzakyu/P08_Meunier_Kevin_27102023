import { Link, NavLink } from 'react-router-dom';
import './header.css';

import Logo from '../../assets/logo.png';


function Header() {
    return (
        <nav className="nav">
            <Link to="/">
                <img src={Logo} alt="Logo de votre site" className="logo" />
            </Link>
            <div>
                <NavLink to="/" className='style-link'>
                    Accueil
                </NavLink>

                <NavLink to='/about' className='style-link'>
                    À propos
                </NavLink>
            </div>
        </nav>
    );
};

export default Header
// IMPORTS
import { Link } from 'react-router-dom'
import './footer.css'

// ASSETS
import LogoFooter from '../../assets/logo-footer.png'



function Footer() {
   return (
      <footer className='style-footer'>
         <Link to="/">
            <img src={LogoFooter} alt='Logo de Kasa'/>
         </Link>

         <p className='footer-text'>© 2023 Kasa. All rights reserved</p>
      </footer>
   )
 }
 
 export default Footer;